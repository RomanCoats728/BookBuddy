import React, { useEffect, useState } from "react";
import { getUser } from "../API";

export default function Account({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(token);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  async function returnBook(id) {
    try {
      console.log(`Book with ID ${id} returned.`);
    } catch (error) {
      console.error("Error returning book:", error);
    }
  }

  return user ? (
    <div>
      <h1>
        Welcome, {user.firstname} {user.lastname} - {user.email}!
      </h1>
      <div className="bookslist">
        {user.books.map((book, index) => {
          return (
            <div key={index}>
              <h2 className="title">{book.title}</h2>
              <img src={book.coverimage} alt={book.title} width="200"></img>
              <button
                className="return-button"
                onClick={() => returnBook(book.id)}
              >
                Return this book!
              </button>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p className="login-message">You must log in to view this page!</p>
  );
}
