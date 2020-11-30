import React from 'react';

const Movie = (props) => {
  
  return (
    props.movies.map(movie =>
      <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.description}</td>
        <td>{movie.price}</td>
        <td>{movie.start}</td>
        <td>{movie.end}</td>
        <td><img src={movie.image} alt="Photo" /></td>
        <td>{movie.tags}</td>
        {
          movie.booked ? <td><button type="button" className="btn unbook" onClick={() => { props.unbookMovie(movie.id) }}>Cancel Booking</button></td> : <td><button type="button" className="btn book" onClick={() => { props.bookMovie(movie.id) }}>Book</button></td>
        }
      </tr>
    )

  )
}
export default Movie;