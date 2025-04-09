var book_num_input = document.getElementById("book-num-input");
var form = document.getElementsByTagName("form");
var book_num_form = document.getElementById("book-num-form");
var book_data_form = document.getElementById("book-data-form");
var book_table = document.getElementById("book-table");
var book_cnt;
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

function getBooks() {
  book_cnt = book_num_input.value;
  if (book_cnt) {
    book_data_form.style.display = "block";
    book_num_form.style.display = "none";
  }
}
function getBooksData() {
  var book_name_input = document.getElementById("book-name-input");
  var book_price_input = document.getElementById("book-price-input");
  var book_date_input = document.getElementById("book-date-input");
  var book_author_name_input = document.getElementById(
    "book-author-name-input"
  );
  var book_author_email_input = document.getElementById(
    "book-author-email-input"
  );
  if (
    book_cnt > 0 &&
    book_name_input.value &&
    book_price_input.value &&
    book_date_input.value &&
    book_author_name_input.value &&
    book_author_email_input.value
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
    edit_btn.addEventListener("click", function () {
      editBook(book);
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
  });
}

function editBook(book) {
  console.log(book);
}

function deleteBook(e) {
  var parent = e.target.parentElement.parentElement;
  var book = parent.getElementsByTagName("td");
  var index = books.findIndex((o) => o.name == book[0]);
  books.splice(index, 1);
  parent.remove();
}
