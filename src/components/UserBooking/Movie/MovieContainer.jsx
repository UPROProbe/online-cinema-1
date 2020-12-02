import React from 'react';
import { connect } from 'react-redux';
import { bookMovie, unbookMovie } from '../../../redux/movieReducer';
import Movie from './Movie';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}

const MovieContainer = connect(mapStateToProps, {bookMovie, unbookMovie})(Movie);

export default MovieContainer;