import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchedMovie = () => {
 const location = useLocation();
  return (
    <div className="searchContainer">
      <div>
        <a href="/">
          <span className="button"> Back </span>
        </a>
      </div>
      <div className="movieSearch" key={location.state.imdbID}>
        <div>
          <img
            src={
              location.state.Poster !== "N/A"
                ? location.state.Poster
                : "https://via.placeholder.com/400"
            }
            alt={location.state.Title}
          />
        </div>
        <div className="searchMovies">
          <div className="details">
            <h3 className="textStyle">Title: {location.state.Title}</h3>
            <div>
              <h3 className="textStyle">Year: {location.state.Year}</h3>
            </div>
            <span className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quis repellat eos, minima omnis sit? Esse quis doloribus
              doloremque possimus quasi temporibus inventore officia nobis?
              Commodi, laudantium corrupti? Porro, blanditiis!
            </span>
            <span className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quis repellat eos, minima omnis sit? Esse quis doloribus
              doloremque possimus quasi temporibus inventore officia nobis?
              Commodi, laudantium corrupti? Porro, blanditiis!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedMovie;
