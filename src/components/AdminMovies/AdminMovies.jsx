import React, { useState, useEffect } from 'react';
import "./AdminMovies.css"
import MovieContainer from './Movie/MovieContainer';
import MovieInput from './MovieInput';

const AdminMovies = (props) => {
debugger
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
                    <MovieInput field='title' newMovieText={props.newMovieText.title} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='description' newMovieText={props.newMovieText.description} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='price' newMovieText={props.newMovieText.price} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='start' newMovieText={props.newMovieText.start} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='end' newMovieText={props.newMovieText.end} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='image' newMovieText={props.newMovieText.image} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='tags' newMovieText={props.newMovieText.tags} updateNewMovieText={props.updateNewMovieText} />
                    <td colSpan="2"><button type="button" className="btn add" onClick={() => { props.addMovie() }}>+add</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default AdminMovies;