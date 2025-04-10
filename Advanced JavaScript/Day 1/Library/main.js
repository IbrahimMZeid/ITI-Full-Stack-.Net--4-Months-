var book_num_input = document.getElementById("book-num-input");
var form = document.getElementsByTagName("form");
var book_num_form = document.getElementById("book-num-form");
var book_data_form = document.getElementById("book-data-form");
var book_table = document.getElementById("book-table");
var book_name_input = document.getElementById("book-name-input");
var book_author_email_input = document.getElementById(
  "book-author-email-input"
);
var book_author_name_input = document.getElementById("book-author-name-input");
book_name_input.addEventListener("input", function () {
  textChange(book_name_input);
});
book_author_name_input.addEventListener("input", function () {
  textChange(book_author_name_input);
});
book_author_email_input.addEventListener("input", emailChange);
var book_cnt;
var editing = false;
var books = [];
var formPreventDefault = function () {
  for (var index = 0; index < form.length; index++) {
    form[index].addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
      },
      true
    );
    form[index].addEventListener("keydown", function (key) {
      var btn = 0 || key.keyCode;
      if (btn == 13) {
        key.preventDefault();
      }
    });
  }
};
formPreventDefault();

function Book(_name, _data, _price, _authorName, _authorEmail) {
  this.name = _name;
  this.date = _data;
  this.price = _price;
  this.author = {
    name: _authorName,
    email: _authorEmail,
  };
}

function emailChange() {
  var rgx = /[a-zA-Z0-9]{3,}@[a-z]{3,}.[a-zA-Z0-9]{3}/g;
  if (!rgx.test(book_author_email_input.value)) {
    book_author_email_input.classList.add("border-danger");
    return false;
  } else {
    book_author_email_input.classList.remove("border-danger");
  }
  return true;
}
function textChange(input) {
  if (input.value.length < 3 || !isNaN(input.value)) {
    input.classList.add("border-danger");
    return false;
  } else {
    input.classList.remove("border-danger");
  }
  return true;
}

function getBooks() {
  book_cnt = book_num_input.value;
  if (book_cnt) {
    book_data_form.style.display = "block";
    book_num_form.style.display = "none";
  }
}

function getBooksData() {
  var book_price_input = document.getElementById("book-price-input");
  var book_date_input = document.getElementById("book-date-input");
  if (
    book_cnt > 0 &&
    textChange(book_name_input) &&
    book_price_input.value &&
    book_date_input.value &&
    textChange(book_author_name_input) &&
    emailChange()
  ) {
    var book = new Book(
      book_name_input.value,
      book_date_input.value,
      book_price_input.value,
      book_author_name_input.value,
      book_author_email_input.value
    );
    book_name_input.value = null;
    book_date_input.value = null;
    book_price_input.value = null;
    book_author_name_input.value = null;
    book_author_email_input.value = null;
    books.push(book);
    book_cnt--;
    if (book_cnt == 0) {
      book_data_form.style.display = "none";
      book_table.style.display = "block";
      createTable();
    }
  }
}

function createTable() {
  books.forEach((book) => {
    addRow(book);
  });
}

function addRow(book) {
  let tbody = document.getElementsByTagName("tbody")[0];
  let tr = document.createElement("tr");
  let book_name = document.createElement("td");
  let book_price = document.createElement("td");
  let book_date = document.createElement("td");
  let book_author_name = document.createElement("td");
  let book_author_email = document.createElement("td");
  let actions = document.createElement("td");
  let edit_btn = document.createElement("button");
  let delete_btn = document.createElement("button");
  book_name.innerText = book.name;
  book_price.innerText = book.price;
  book_date.innerText = book.date;
  book_author_name.innerText = book.author.name;
  book_author_email.innerText = book.author.email;
  edit_btn.innerText = "Edit";
  delete_btn.innerText = "Delete";
  edit_btn.classList.add("btn-primary");
  edit_btn.classList.add("btn");
  delete_btn.classList.add("btn-danger");
  delete_btn.classList.add("btn");
  edit_btn.addEventListener("click", function (e) {
    editBook(e, book);
  });
  delete_btn.addEventListener("click", deleteBook);
  actions.append(edit_btn, delete_btn);
  tr.append(
    book_name,
    book_price,
    book_date,
    book_author_name,
    book_author_email,
    actions
  );
  tbody.append(tr);
}

function editBook(e, book) {
  if (!editing) {
    editing = true;
    var parent = e.target.parentElement.parentElement;
    var tr = document.createElement("tr");
    let save_btn = document.createElement("button");
    let cancel_btn = document.createElement("button");
    var actions = document.createElement("td");
    tr.innerHTML = `
                <td><input type="text" class="form-control" value="${book.name}" required></td>
                <td><input type="number" min="1" class="form-control" value="${book.price}" required></td>
                <td><input type="date" class="form-control" value="${book.date}" required></td>
                <td><input type="text" class="form-control" value="${book.author.name}" required></td>
                <td><input type="email" class="form-control" value="${book.author.email}" required></td>`;
    save_btn.classList.add("btn", "btn-success");
    save_btn.innerText = "Save";
    cancel_btn.classList.add("btn", "btn-warning");
    cancel_btn.innerText = "Cancel";
    actions.append(save_btn, cancel_btn);
    tr.append(actions);
    parent.replaceWith(tr);
    cancel_btn.addEventListener("click", cancelClicked);
    save_btn.addEventListener("click", function (e) {
      saveClicked(e, book);
    });
  }
}
function cancelClicked() {
  editing = false;
  console.log(books);
  var tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  createTable();
}

function saveClicked(e, book) {
  editing = false;
  var parent = e.target.parentElement.parentElement;
  var index = books.findIndex((o) => o.name == book[0]);
  var inputs = parent.getElementsByTagName("input");
  book.name = inputs[0].value;
  book.price = inputs[1].value;
  book.date = inputs[2].value;
  book.author = { name: inputs[3].value, email: inputs[4].value };
  // books.splice(index, 1, book);
  var tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  createTable();
}

function deleteBook(e) {
  var parent = e.target.parentElement.parentElement;
  var book = parent.getElementsByTagName("td");
  var index = books.findIndex((o) => o.name == book[0]);
  books.splice(index, 1);
  parent.remove();
}
