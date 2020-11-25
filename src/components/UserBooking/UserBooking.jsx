import React from 'react';
import Movie from './Movie/Movie';
import "./UserBooking.css"


const UserBooking = (props) => {

  let moviesElements = props.movies.map(movie =>
    <Movie title={movie.title} description={movie.description} price={movie.price} start={movie.start} end={movie.end} image={movie.image} tags={movie.tags} />);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Ticket price</th>
          <th scope="col">Start date</th>
          <th scope="col">End date</th>
          <th scope="col">Picture</th>
          <th scope="col">Tags</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {moviesElements}

      </tbody>
    </table>
  )
}
export default UserBooking;