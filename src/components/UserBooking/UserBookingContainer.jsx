import React from 'react';
import { connect } from 'react-redux';
import { setMovies } from '../../redux/movieReducer';
import UserBooking from './UserBooking';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}

const UserBookingContainer = connect(mapStateToProps, {setMovies})(UserBooking);

export default UserBookingContainer;