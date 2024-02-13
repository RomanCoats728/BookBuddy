import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

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
