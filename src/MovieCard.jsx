import React from "react";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

  const navigate = useNavigate();


  const onCLick = () => {
  navigate('/movie', {state: {imdbID: imdbID, Year:Year, Poster:Poster, Title:Title, Type:Type}});

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
