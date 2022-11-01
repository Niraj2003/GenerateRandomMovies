import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";

function myfun() {
    var moviesNames = require('movies-names');
    var m = moviesNames.random();
    return m;
}

function Generator() {
  const [movie, setMovie] = useState("MovieName");
  const [year, setYear] = useState("Year");
  return (
    <>
    <center>
        <h1 className="moviename">
            {movie} : {year}
        </h1>
        <Button variant="dark" onClick={() => ( (setMovie(myfun().title)), (setYear(myfun().year))) } >Generate Movie</Button>
    </center>
      
    </>
  )
}

export default Generator;