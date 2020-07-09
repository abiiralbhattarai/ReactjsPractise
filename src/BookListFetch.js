import React, { useState, useEffect } from "react";
import axios from "axios";

function BookListFetch() {
  const [books, updateBook] = useState({ hits: [] });

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      updateBook(response.data);
    }
    fetchBooks();
  }, []);

  return (
    <>
      <ul>
        {books.hits.map((book) => (
          <li key={book.objectID}>{book.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BookListFetch;
