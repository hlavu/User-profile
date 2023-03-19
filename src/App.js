import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSpinner } from "@fortawesome/fontawesome-free-solid";
import Pagination from "./Pagination";
import { UserCard } from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://randomuser.me/api/?results=100"
  );

  const cardPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  let lastCardIdx = cardPerPage * currentPage;
  let firstCardIdx = lastCardIdx - cardPerPage;

  const displayedList = (gender = "both") => {
    let newList = users;
    switch (gender) {
      case "female":
        setSortedList(newList.filter((user) => user.gender === "female"));
        break;
      case "male":
        setSortedList(newList.filter((user) => user.gender === "male"));
        break;
      default:
        setSortedList(users);
    }
  };

  useEffect(() => {
    axios
      .get(`${currentUrl}`)
      .then((res) => {
        setUsers(res.data.results);
        setSortedList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [currentUrl]);

  const sortByGender = (e) => {
    let gender = e.target.id;

    document.querySelector(".active")?.classList.toggle("active", false);
    document.querySelector(`.${gender}`).classList.toggle("active", true);
    setCurrentPage(1);
    displayedList(gender);
  };

  return sortedList.length === 0 ? (
    <div className="loading">
      <FontAwesomeIcon className="spinner" icon={faSpinner} />
    </div>
  ) : (
    <div className="app">
      <div className="gender">
        <input
          onClick={(e) => sortByGender(e)}
          type="radio"
          name="gender"
          id="all"
          hidden
          checked
        />
        <label className="all active" htmlFor="all">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
        </label>

        <input
          onClick={(e) => sortByGender(e)}
          type="radio"
          name="gender"
          id="female"
          hidden
        />
        <label className="female" htmlFor="female">
          Female
        </label>
        <input
          onClick={(e) => sortByGender(e)}
          type="radio"
          name="gender"
          id="male"
          hidden
        />

        <label className="male" htmlFor="male">
          Male
        </label>
      </div>

      <div className="user-list">
        {sortedList.slice(firstCardIdx, lastCardIdx).map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </div>

      <Pagination
        changePage={setCurrentPage}
        currentPage={currentPage}
        cardPerPage={cardPerPage}
        totalCard={sortedList.length}
      />
    </div>
  );
}

export default App;
