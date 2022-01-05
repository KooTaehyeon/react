import PropTypes from "prop-types";
import{Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,coverImage,title,summary,genres}){
 return     <div className={styles.movie}>
 <img src={coverImage} alt='사진'></img>
 <h2 className={styles.movie__title}>
    <Link to={`/movie/${id}`}> {title}</Link>
    </h2>
<p>{summary.length> 235? `${summary.slice(0,235)}`:summary} </p>
<ul className={styles.movie__genres}>
        {genres && genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
</ul>
</div>
}
Movie.propTypes= {
  id:PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;