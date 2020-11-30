import React from 'react';
import "./AdminMovies.css"
import MovieContainer from './Movie/MovieContainer';
import MovieInput from './MovieInput';


const AdminMovies = (props) => {

    return (
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
                <MovieContainer />
                <tr>
                    <MovieInput field='title' newMovieText={props.newMovieTextTitle} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='description' newMovieText={props.newMovieTextDescription} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='price' newMovieText={props.newMovieTextPrice} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='start' newMovieText={props.newMovieTextStart} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='end' newMovieText={props.newMovieTextEnd} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='image' newMovieText={props.newMovieTextImage} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='tags' newMovieText={props.newMovieTextTags} updateNewMovieText={props.updateNewMovieText} />
                    <td colSpan="2"><button type="button" className="btn add" onClick={() => { props.addMovie() }}>+add</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default AdminMovies;