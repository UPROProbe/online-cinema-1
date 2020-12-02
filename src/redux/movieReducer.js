import firebaseDb from "../firebase"
const ADD_MOVIE = 'ADD-MOVIE'
const UPDATE_NEW_MOVIE_TEXT = 'UPDATE-NEW-MOVIE-TEXT'
const DELETE_MOVIE = 'DELETE_MOVIE'
const BOOK_MOVIE = 'BOOK_MOVIE'
const UNBOOK_MOVIE = 'UNBOOK_MOVIE'
const SET_MOVIES = 'SET_MOVIES'

let initialState = {
    movies: [],
    newMovieText: {
        title: '',
        description: '',
        price: '',
        start: '',
        end: '',
        image: '',
        tags: '',
    }
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            let newMovie = {
                title: state.newMovieText.title,
                description: state.newMovieText.description,
                price: state.newMovieText.price,
                start: state.newMovieText.start,
                end: state.newMovieText.end,
                image: state.newMovieText.image,
                tags: state.newMovieText.tags,
            }
            // firebaseDb.child('movies').push(
            //     newMovie,
            //     err=>{
            //         if(err)
            //         console.log(err)
            //     }
            // )
            let newMovieTextCopy={}
            for (let key in state.newMovieText) {
                newMovieTextCopy[key] = state.newMovieText[key];
            }
            for (let key in newMovieTextCopy) {
                newMovieTextCopy[key] = '';
            }
            return {
                ...state,
                movies: [...state.movies, newMovie],
                newMovieText: newMovieTextCopy,
            };
        case UPDATE_NEW_MOVIE_TEXT:{
            let newMovieTextCopy={}
            for (let key in state.newMovieText) {
                newMovieTextCopy[key] = state.newMovieText[key];
            }
            for (let key in newMovieTextCopy) {
                if(key === action.from){
                    newMovieTextCopy[key] = action.newText;
                    return{
                        ...state,
                        newMovieText: newMovieTextCopy,
                    }
                }
            }
            break;
        }
        case DELETE_MOVIE: {
            let removeByAttr = function (arr, attr, value) {
                let i = arr.length;
                while (i--) {
                    if (arr[i]
                        && arr[i].hasOwnProperty(attr)
                        && (arguments.length > 2 && arr[i][attr] === value)) {
                        arr.splice(i, 1);
                    }
                }
                return arr;
            }
            removeByAttr(state.movies, 'id', action.movieId);
            return {
                ...state,
                movies: [...state.movies],
            };
        }
        case BOOK_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.movieId) {
                        return { ...movie, booked: true }
                    }
                    return movie
                })
            }
        case UNBOOK_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.movieId) {
                        return { ...movie, booked: false }
                    }
                    return movie
                })
            }
        case SET_MOVIES:
            return {
                ...state,
                movies: [...action.movies]
                // movies: [...state.movies, ...action.movies]
            }

        // case DELETE_MOVIE:
        //     return {
        //         ...state,
        //         movies: state.movies.map(movie => {
        //             if (movie.id !== action.movieId) {
        //                 return { ...movie,description:'0'}
        //             }
        //             return {movie};
        //         })
        //     }
        default:
            return state;
    }
}
export default movieReducer;
export const addMovie = () => ({ type: ADD_MOVIE })
export const updateNewMovieText = (text, from) => ({ type: UPDATE_NEW_MOVIE_TEXT, newText: text, from })
export const deleteMovie = movieId => ({ type: DELETE_MOVIE, movieId })
export const bookMovie = movieId => ({ type: BOOK_MOVIE, movieId })
export const unbookMovie = movieId => ({ type: UNBOOK_MOVIE, movieId })
export const setMovies = movies => ({ type: SET_MOVIES, movies })