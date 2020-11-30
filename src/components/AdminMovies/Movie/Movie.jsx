import React from 'react';
import style from "./Movie.css"

const Movie = (props) => {
    // debugger
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
                <td><button type="button" className="btn remove" onClick={() => { props.deleteMovie(movie.id) }}>Remove</button></td>
                <td><button type="button" className="btn edit">Edit</button></td>
            </tr>)
    )
}
export default Movie;