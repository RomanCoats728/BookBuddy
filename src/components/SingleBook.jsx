/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_URL } from "../API";

export default function SingleBook({ user, token }) {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  async function fetchBook() {
    try {
      const response = await fetch(`${API_URL}/books/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setDetails(result.book);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    details && (
      <div className="SelectedBook">
        <img src={details?.coverimage} alt={details?.title} width="400" />
        <h1>
          <span className="book-title">{details?.title}</span> by
          <span className="author">{details?.author}</span>
        </h1>

        <p>{details?.description}</p>
        {user ? (
          details.available ? (
            <button onClick={fetchBook}>Checkout this Book!</button>
          ) : (
            <p className="message">This book is unavailable.</p>
          )
        ) : (
          <p className="message">Please log in to see availability.</p>
        )}

        <button type="button" onClick={handleClick}>
          Return Home
        </button>
      </div>
    )
  );
}
