import React from 'react';
import Movie from './Movie/Movie';
import "./Movies.css"

const Movies = (props) => {

 let moviesElements = props.movies.map(movie =>
    <Movie title={movie.title} image={movie.image} description={movie.description} tags={movie.tags}/>);

  return (
    <div className="row justify-content-center">
      {moviesElements}
    </div>
  )
}
export default Movies;