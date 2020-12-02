import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../../../redux/movieReducer';
import Movie from './Movie';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}

const MovieContainer = connect(mapStateToProps, {deleteMovie})(Movie);

export default MovieContainer;