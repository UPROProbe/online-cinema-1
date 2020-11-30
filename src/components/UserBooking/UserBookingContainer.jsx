import React from 'react';
import { connect } from 'react-redux';
import UserBooking from './UserBooking';

let mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const UserBookingContainer = connect(mapStateToProps, mapDispatchToProps)(UserBooking);

export default UserBookingContainer;