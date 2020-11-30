const ADD_MOVIE = 'ADD-MOVIE'
const UPDATE_NEW_MOVIE_TEXT = 'UPDATE-NEW-MOVIE-TEXT'
const DELETE_MOVIE = 'DELETE_MOVIE'

let initialState = {
    movies: [
        { id: 1, title: 'Tenet', description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', price: '5$', start: 'some start date', end: 'some end date', image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', tags: 'Action, Sci-Fi' },
        { id: 2, title: 'The Irishman', description: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.', price: '4$', start: 'some start date', end: 'some end date', image: 'https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg', tags: 'Biography, Crime, Drama' },
        { id: 3, title: 'some title', description: 'some description', price: 'some price', start: 'some start date', end: 'some end date', image: 'some picture', tags: 'some tags' },
        { id: 4, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
        { id: 5, title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
    ],
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
export const updateNewMovieTextActionCreator = (text, from) => ({ type: UPDATE_NEW_MOVIE_TEXT, newText: text, from: from })
export const deleteMovieActionCreator = id => ({ type: DELETE_MOVIE, movieId: id })