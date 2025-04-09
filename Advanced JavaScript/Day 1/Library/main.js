var book_num_input = document.getElementById("book-num-input");
var form = document.getElementsByTagName("form");
var book_num_form = document.getElementById("book-num-form");
var book_data_form = document.getElementById("book-data-form");
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
  this.auther = {
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
  if (book_cnt > 0) {
    var book_name_input = document.getElementById("book-name-input");
    var book_price_input = document.getElementById("book-price-input");
    var book_date_input = document.getElementById("book-date-input");
    var book_auther_name_input = document.getElementById(
      "book-auther-name-input"
    );
    var book_auther_email_input = document.getElementById(
      "book-auther-email-input"
    );
    var book = new Book(
      book_name_input.value,
      book_date_input.value,
      book_price_input.value,
      book_auther_name_input.value,
      book_auther_email_input.value
    );
    book_name_input.value = null;
    book_date_input.value = null;
    book_price_input.value = null;
    book_auther_name_input.value = null;
    book_auther_email_input.value = null;
    books.push(book);
    book_cnt--;
    if (book_cnt == 0) {
      book_data_form.style.display = "none";
      console.log(books);
    }
  }
}
