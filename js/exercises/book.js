function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  };
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

theHobbit.info();
