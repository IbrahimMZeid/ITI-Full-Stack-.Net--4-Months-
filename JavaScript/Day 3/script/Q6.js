var library = {
  book: [
    {
      title: "HTML",
      author: "John",
      year: 2005,
    },
    {
      title: "CSS",
      author: "MArk",
      year: 2008,
    },
    {
      title: "C#",
      author: "Doe",
      year: 2001,
    },
  ],
};

displayTitle(library);

function displayTitle(obj) {
  for (var i = 0; i < obj.book.length; i++) {
    document.writeln(
      "<h2>Book " + (i + 1) + " Title : " + obj.book[i].title + "</h2>"
    );
  }
}
