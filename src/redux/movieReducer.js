import firebaseDb from "../firebase"
const ADD_MOVIE = 'ADD-MOVIE'
const UPDATE_NEW_MOVIE_TEXT = 'UPDATE-NEW-MOVIE-TEXT'
const DELETE_MOVIE = 'DELETE_MOVIE'
const BOOK_MOVIE = 'BOOK_MOVIE'
const UNBOOK_MOVIE = 'UNBOOK_MOVIE'
const SET_MOVIES = 'SET_MOVIES'

let initialState = {
    movies: [],
    newMovieTextTitle: '',
    newMovieTextDescription: '',
    newMovieTextPrice: '',
    newMovieTextStart: '',
    newMovieTextEnd: '',
    newMovieTextImage: '',
    newMovieTextTags: '',
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            let newMovie = {
                title: state.newMovieTextTitle,
                description: state.newMovieTextDescription,
                price: state.newMovieTextPrice,
                start: state.newMovieTextStart,
                end: state.newMovieTextEnd,
                image: state.newMovieTextImage,
                tags: state.newMovieTextTags,
            }
            firebaseDb.child('movies').push(
                newMovie,
                err=>{
                    if(err)
                    console.log(err)
                }
            )
            return {
                ...state,
                movies: [...state.movies, newMovie],
                newMovieTextTitle: '',
                newMovieTextDescription: '',
                newMovieTextPrice: '',
                newMovieTextStart: '',
                newMovieTextEnd: '',
                newMovieTextImage: '',
                newMovieTextTags: '',
            };
        case UPDATE_NEW_MOVIE_TEXT:
            switch (action.from) {
                case 'title':
                    return {
                        ...state,
                        newMovieTextTitle: action.newText,
                    };
                case 'description':
                    return {
                        ...state,
                        newMovieTextDescription: action.newText,
                    };
                case 'price':
                    return {
                        ...state,
                        newMovieTextPrice: action.newText,
                    };
                case 'start':
                    return {
                        ...state,
                        newMovieTextStart: action.newText,
                    };
                case 'end':
                    return {
                        ...state,
                        newMovieTextEnd: action.newText,
                    };
                case 'image':
                    return {
                        ...state,
                        newMovieTextImage: action.newText,
                    };
                case 'tags':
                    return {
                        ...state,
                        newMovieTextTags: action.newText,
                    };
                default:
                    return state;
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
            return{
                ...state,
                movies: [...state.movies, ...action.movies]
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
export const addMovieActionCreator = () => ({ type: ADD_MOVIE })
export const updateNewMovieTextActionCreator = (text, from) => ({ type: UPDATE_NEW_MOVIE_TEXT, newText: text, from })
export const deleteMovieActionCreator = movieId => ({ type: DELETE_MOVIE, movieId })
export const bookMovieAC = movieId => ({ type: BOOK_MOVIE, movieId })
export const unbookMovieAC = movieId => ({ type: UNBOOK_MOVIE, movieId })
export const setMoviesAC = movies => ({ type: SET_MOVIES, movies })