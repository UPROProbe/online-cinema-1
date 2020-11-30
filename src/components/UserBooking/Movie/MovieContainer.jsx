import React from 'react';
import { connect } from 'react-redux';
import { bookMovieAC, unbookMovieAC } from '../../../redux/movieReducer';
import Movie from './Movie';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        bookMovie: (movieId)=>{
            dispatch(bookMovieAC(movieId))
        },
        unbookMovie: (movieId)=>{
            dispatch(unbookMovieAC(movieId))
        },
    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);

export default MovieContainer;