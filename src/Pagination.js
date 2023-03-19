import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import "./Pagination.css";
export default function Pagination({
  currentPage = 1,
  changePage,
  cardPerPage,
  totalCard,
}) {
  return (
    <div className="pagination">
      <button
        className="prev"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span className="curr">{currentPage}</span>
      <button
        className="next"
        onClick={() => {
          changePage(currentPage + 1);
        }}
        disabled={currentPage === Math.ceil(totalCard / cardPerPage)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
