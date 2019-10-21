import axios from "axios";

export default {
  // login
  login: function() {
    return axios.post("/api/login/");
  },
  // Gets the book with the given id
  contact: function(id) {
    return axios.get("/api/contact/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
