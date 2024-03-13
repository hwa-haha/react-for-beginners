import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const getMovie = useCallback(async ()=> {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading((current) => !current);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    console.log(json);
  },[id]);
  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

  return (
    <div>
        {loading ? (
        <h1>Loading...</h1>
      ) : ( 
        <div>
        <img  src={movie.medium_cover_image} alt={movie.medium_cover_image}/>
        <h2>
            {movie.title}
        </h2>
        <p>{movie.summary}</p>
        <ul>
        {genres.map((g)=> (
            <li key={g}>{g}</li>
        ))}
        </ul>
        </div>
        )}
    </div>
  );
}
export default Detail;