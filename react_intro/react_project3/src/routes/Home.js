import Movie from '../components/Movie';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              year={item.year}
              coverImage={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
