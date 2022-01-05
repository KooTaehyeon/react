import Movie from '../components/Movie';
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
function Detail(){
  const {id} = useParams()
  const getMovide = async()=>{
    const json= await(
      (await fetch(`https:yts.mx/api/v2/list_movies.json?movie_details.json?movie_id=${id}`))
    ).json();
console.log(json);
  }
  useEffect(()=>{
   getMovide();
  },[]);

    return<h1>Detail</h1>
}
export default Detail;