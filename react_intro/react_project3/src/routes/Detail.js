import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Detail() {
  const { id } = useParams();
  const [a, setA] = useState([]);
  const getMovide = async () => {
    const json = await (
      await fetch(
        `https:yts.mx/api/v2/list_movies.json?movie_details.json?movie_id=${id}`
      )
    ).json();
    setA(json);
  };
  useEffect(() => {
    getMovide();
  }, []);
  console.log(a);
  return <h1>detail</h1>;
}
export default Detail;
