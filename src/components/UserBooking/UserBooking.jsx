import React from 'react';
import MovieContainer from './Movie/MovieContainer';
import "./UserBooking.css"


const UserBooking = (props) => {
  // debugger
  
  // if (props.movies.length === 0) {
  //   props.setMovies(
  //     [
  //       { id: 1, booked: false, title: 'Tenet', description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', price: '5$', start: 'some start date', end: 'some end date', image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', tags: 'Action, Sci-Fi' },
  //       { id: 2, booked: true, title: 'The Irishman', description: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.', price: '4$', start: 'some start date', end: 'some end date', image: 'https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg', tags: 'Biography, Crime, Drama' },
  //       { id: 3, booked: false, title: 'some title', description: 'some description', price: 'some price', start: 'some start date', end: 'some end date', image: 'some picture', tags: 'some tags' },
  //       { id: 4, booked: false, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
  //       { id: 5, booked: true, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
  //     ]
  //   )
  // }
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
        <MovieContainer />
      </tbody>
    </table>
  )
}
export default UserBooking;