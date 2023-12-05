/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React from "react";

export default function Account({ user, token, fetchUser }) {
  async function returnBook(id, token) {
    try {
    
      await fetchUser();
    } catch (error) {
      console.error(error);
    }
  }
  return user ? (
    <div>
      <h1>Welcome, User - {user.email}!</h1>
      <div className="bookslist">
        {user.books.map((book, index) => {
          return (
            <div key={index}>
              <h2 className="title">{book.title}</h2>
              <img src={book.coverimage} alt={book.title} width="200"></img>
              <button
                className="return-button"
                onClick={async () => {
                  await returnBook(book.id);
                }}
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