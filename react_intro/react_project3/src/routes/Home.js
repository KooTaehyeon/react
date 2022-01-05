import Movie from '../components/Movie';
import { useEffect, useState } from 'react';

function Home (){

  const [loading,setLoading] = useState(true);
  const [movies,setMovies]= useState([]);
  const getMovies= async()=>{// eslint-disable-line no-unused-vars
    const json =  await (await fetch(`https:yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
      ).json();
      setMovies(json.data.movies);
      setLoading(false)
    }; 
    
  useEffect(()=>{
    getMovies();
    },[])
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1>: <div>{movies.map(item =>
       <Movie
       key={item.id}
       id={item.id}
       coverImage={item.medium_cover_image} 
       title={item.title} 
       summary={item.summary}
       genres={item.genres} />
       
        )}
        </div>}
    </div>
  );

  return
}
export default Home;