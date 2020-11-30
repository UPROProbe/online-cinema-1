import React from 'react';
import { connect } from 'react-redux';
import { deleteMovieActionCreator } from '../../../redux/movieReducer';
import Movie from './Movie';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {  
        deleteMovie: (movieId) => {
            dispatch(deleteMovieActionCreator(movieId));
        },
    }
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);

export default MovieContainer;