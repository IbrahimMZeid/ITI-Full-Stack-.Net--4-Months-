function Box(width, height, length, numOfBooks) {
  this.width = width;
  this.height = height;
  this.length = length;
  this.numOfBooks = numOfBooks;
  this.books = [];
}
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Box.prototype.getBooksNumber = function () {
    return this.books.length;
}

Box.prototype.addBook = function (book) {
  if (this.books.length >= this.numOfBooks) {
    console.log("Box is full");
    return false;
  }
  this.books.push(book);
  return true;
};

Box.prototype.removeBook = function (titleOrAuthor) {
  this.books = this.books.filter(
    (book) => book.title !== titleOrAuthor && book.author !== titleOrAuthor
  );
};

Box.prototype.toString = function () {
  return `Box Width = ${this.width},\nBox Height = ${this.height},\nBox Length = ${this.length},\nBox Books Number = ${this.getBooksNumber()}`;
}

Box.prototype.valueOf = function () {
  return this.getBooksNumber();
}
var box1 = new Box(10, 10, 10, 2);
var box2 = new Box(10, 10, 10, 5);
var book1 = new Book("book1", "author1");
var book2 = new Book("book2", "author1");
var book3 = new Book("book3", "author3");
var book4 = new Book("book4", "author4");
var book5 = new Book("book5", "author5");

box1.addBook(book1);
box1.addBook(book2);
console.log(box1.books);
console.log(box1.toString());
box1.removeBook("author1");
box1.addBook(book3);
box2.addBook(book4);
box2.addBook(book5);
console.log(box1 + box2);
