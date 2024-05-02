import { useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([])
  const URL = "https://swapi.dev/api/films/?format=json";
  async function makeRequest() {
    const something = await fetch(URL);
    const data = await something.json()
    setMovies(data.results)
    console.log(data)

  }

  return (
    <div>
      <button class="btn" onClick={makeRequest}>Show Movie</button>
      <div class="movieContainer">
        {movies.map((elem) => (
            <div className="Movies">
                <h2>{elem.title}</h2>
                <h6>{elem.release_date}</h6>
                <h6>{elem.director}</h6>
                <h6>{elem.producer}</h6>
                <p>{elem.opening_crawl}</p>

            </div>

        ))}
      </div>
    </div>
  );
}

export default Movie;
