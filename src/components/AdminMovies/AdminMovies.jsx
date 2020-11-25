import React from 'react';
import Movie from './Movie/Movie';
import "./AdminMovies.css"

const AdminMovies = (props) => {

    let moviesElements = props.movies.map(movie =>
        <Movie title={movie.title} description={movie.description} price={movie.price} start={movie.start} end={movie.end} image={movie.image} tags={movie.tags} />);

    let newMovie = React.createRef();
    let addMovie = () => {
        let text = newMovie.current.value;
        alert(text);
    }

    return (
        <div>
            <table className="table table-sm">
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
                    <tr>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td><input ref={newMovie} className='form-control' /></td>
                        <td colspan="2"><button type="button" className="btn add" onClick={addMovie}>+add</button></td>
                    </tr>
                </tbody>
            </table>

            {/* <button type="button" className="btn add" onClick={addMovie}>+add</button> */}

        </div>
    )
}
export default AdminMovies;