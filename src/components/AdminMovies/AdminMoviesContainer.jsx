import React from 'react';
import { connect } from 'react-redux';
import { addMovieActionCreator, setMoviesAC, updateNewMovieTextActionCreator } from '../../redux/movieReducer';
import AdminMovies from './AdminMovies';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,

        newMovieTextTitle: state.movies.newMovieTextTitle,
        newMovieTextDescription: state.movies.newMovieTextDescription,
        newMovieTextPrice: state.movies.newMovieTextPrice,
        newMovieTextStart: state.movies.newMovieTextStart,
        newMovieTextEnd: state.movies.newMovieTextEnd,
        newMovieTextImage: state.movies.newMovieTextImage,
        newMovieTextTags: state.movies.newMovieTextTags,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMovie: () => {
            dispatch(addMovieActionCreator());
        },
        updateNewMovieText: (text, from) => {
            dispatch(updateNewMovieTextActionCreator(text, from));
        },
        setMovies:(movieId)=>{
            dispatch(setMoviesAC(movieId))
        },
    }
}
const AdminMoviesContainer = connect(mapStateToProps, mapDispatchToProps)(AdminMovies);

export default AdminMoviesContainer;