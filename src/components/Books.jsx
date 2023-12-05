/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */ import { useNavigate } from "react-router-dom";
import React from "react";

export default function Books({ novel }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/books/${novel?.id}`);
  }
  return (
    <div>
      <h2>{novel?.title}</h2>
      <h3>{novel?.author}</h3>
      <img
        className="cover"
        src={novel?.coverimage}
        alt={novel?.title}
        width="200"
      ></img>
      <button type="button" className="details-button" onClick={handleClick}>
        Details
      </button>
    </div>
  );
}
