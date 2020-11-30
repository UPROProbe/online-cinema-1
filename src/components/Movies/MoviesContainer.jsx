import React from 'react';
import { connect } from 'react-redux';
import { addMovieActionCreator, updateNewMovieTextActionCreator } from '../../redux/movieReducer';
import Movies from './Movies';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movies);

export default MoviesContainer;