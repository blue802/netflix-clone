import React, { useState, useEffect } from "react";

import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__desc">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
