import React, { useState, useEffect } from 'react';
import "./AdminMovies.css"
import MovieContainer from './Movie/MovieContainer';
import MovieInput from './MovieInput';

import firebaseDb from "../../firebase"

const AdminMovies = (props) => {
debugger
    let [movies, setMovies] = useState({})
    useEffect(() => {
        firebaseDb.child('movies').on('value', snapshot => {
            if (snapshot.val() != null)
                setMovies({
                    ...snapshot.val()
                })
        })
    }, [])

    if (props.movies.length === 0) {
        // props.setMovies(
        //     [
        //         { id: 1, booked: false, title: 'Tenet', description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', price: '5$', start: 'some start date', end: 'some end date', image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', tags: 'Action, Sci-Fi' },
        //         { id: 2, booked: true, title: 'The Irishman', description: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.', price: '4$', start: 'some start date', end: 'some end date', image: 'https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg', tags: 'Biography, Crime, Drama' },
        //         { id: 3, booked: false, title: 'some title', description: 'some description', price: 'some price', start: 'some start date', end: 'some end date', image: 'some picture', tags: 'some tags' },
        //         { id: 4, booked: false, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
        //         { id: 5, booked: true, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
        //     ]
        // )

        Object.keys(movies).map(id => {
            props.setMovies([movies[id]])
        })
    }



    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Ticket price</th>
                    <th scope="col">Start date</th>
                    <th scope="col">End date</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Tags</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <MovieContainer />
                <tr>
                    <MovieInput field='title' newMovieText={props.newMovieTextTitle} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='description' newMovieText={props.newMovieTextDescription} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='price' newMovieText={props.newMovieTextPrice} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='start' newMovieText={props.newMovieTextStart} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='end' newMovieText={props.newMovieTextEnd} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='image' newMovieText={props.newMovieTextImage} updateNewMovieText={props.updateNewMovieText} />
                    <MovieInput field='tags' newMovieText={props.newMovieTextTags} updateNewMovieText={props.updateNewMovieText} />
                    <td colSpan="2"><button type="button" className="btn add" onClick={() => { props.addMovie() }}>+add</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default AdminMovies;