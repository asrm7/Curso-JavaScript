module.exports = class Database {
  #storange = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storange[key];
  }

  saveAuthor(author) {
    this.#storange.authors.push(author);
  }

  findBookByName(bookName) {
    return this.#storange.books.find((b) => b.name === bookName);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) [this.#storange.books.push(book)];
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addBooksToStock(quantity);
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  findPosterByName(posterName) {
    return this.#storange.posters.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) [this.#storange.posters.push(poster)];
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addPostersToStock(quantity);
  }

  removePostersFormStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removePostersFormStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storange.users.find((u) => u.mail === user.email);
    if (!userExists) {
      this.#storange.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storange.orders.push(order);
  }

  showStorange() {
    console.table(this.#storange.authors);
    console.table(this.#storange.books);
    console.table(this.#storange.posters);
    console.table(this.#storange.users);
    console.table(this.#storange.orders.map((order) => order.data));
  }
};
