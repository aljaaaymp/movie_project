import React from "react";
import SearchedMovie from "./SearchedMovie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [imdbId, setImdbId] = useState();
  const [year, setYear] = useState();
  const [poster, setPoster] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState();

  const navigate = useNavigate();


  const onCLick = () => {
  navigate('/movie', {state: {imdbID: imdbID, Year:Year, Poster:Poster, Title:Title, Type:Type}});
  console.log(Title)
  console.log(Year)
  };


  return (
    <div className="movie" key={imdbID} onClick={onCLick}>
      <div>
        <h1>{Year}</h1>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
