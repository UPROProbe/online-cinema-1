import React from 'react';
import { connect } from 'react-redux';
import { addMovie, setMovies, updateNewMovieText } from '../../redux/movieReducer';
import AdminMovies from './AdminMovies';
import firebaseDb from "../../firebase"

class AdminMoviesContainer extends React.Component {
    componentDidMount() {
        firebaseDb.child('movies').on('value', snapshot => {
            if (snapshot.val() != null)
                this.props.setMovies(Object.values(snapshot.val()))
        })
    }

    render() {
        return <AdminMovies newMovieText={this.props.newMovieText} updateNewMovieText={this.props.updateNewMovieText} addMovie={this.props.addMovie}/>
    }
}

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

        newMovieText:state.movies.newMovieText
    }
}

export default connect(mapStateToProps, {addMovie, updateNewMovieText, setMovies})(AdminMoviesContainer);