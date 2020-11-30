import React from 'react';
import { connect } from 'react-redux';
import { setMoviesAC } from '../../redux/movieReducer';
import UserBooking from './UserBooking';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies))
        },
    }
}

const UserBookingContainer = connect(mapStateToProps, mapDispatchToProps)(UserBooking);

export default UserBookingContainer;