import React, { Fragment, useState } from "react";
import classes from "./SearchBar.module.css";

export const SearchBar = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [songData, setSongData] = useState([]);
  const [songInput, setSongInput] = useState("");

  const fetchSong = async () => {
    try {
      const response = await fetch("");
      if (!response.ok) throw new Error("Somthing went wrong!");
      const data = response.json();
      setSongData(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (songInput.trim().length === 0) {
      return;
    }
  };

  console.log(songInput);
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler} className={classes["form-search"]}>
        <label htmlFor="search-song">
          <h1>Find Your Next Favorite Song</h1>
        </label>
        <input
          className={classes["searchbar"]}
          type="text"
          placeholder="Search"
          id="search-song"
          value={songInput}
          onChange={(event) => setSongInput(event.target.value)}
        />
      </form>
    </Fragment>
  );
};