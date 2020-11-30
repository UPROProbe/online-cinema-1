// import movieReducer from "./movieReducer";
// let store = {
//     _state: {
//         movies: [
//             { title: 'Tenet', description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', price: '5$', start: 'some start date', end: 'some end date', image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', tags: 'Action, Sci-Fi' },
//             { title: 'The Irishman', description: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.', price: '4$', start: 'some start date', end: 'some end date', image: 'https://images-na.ssl-images-amazon.com/images/I/71Y5pMAw8rL._AC_SL1200_.jpg', tags: 'Biography, Crime, Drama' },
//             { title: 'some title', description: 'some description', price: 'some price', start: 'some start date', end: 'some end date', image: 'some picture', tags: 'some tags' },
//             { title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
//             { title: '', description: '', price: '', start: '', end: '', image: '', tags: '' },
//         ],
//         users: [
//             { firstName: 'Ruairidh', lastName: 'Fisher', email: 'ruairidh.fisher@gmail.com', remove: '+' },
//             { firstName: 'Siraj', lastName: 'Pugh', email: 'siraj.pugh@gmail.com', remove: '-' },
//             { firstName: '', lastName: '', email: '', remove: '' },
//         ],
//         newMovieText: 'rty',
//     },
//     _callSubscriber() {
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     addMovie(title) {
//         let newMovie = {
//             title: this._state.newMovieText,
//             description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
//             price: '5$',
//             start: 'some start date',
//             end: 'some end date',
//             image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
//             tags: 'Action, Sci-Fi'
//         }
//         this._state.movies.push(newMovie);
//         this._state.newMovieText = '';
//         this._callSubscriber(this._state);
//     },
//     updateNewMovieText(newText) {
//         this._state.newMovieText = newText;
//         this._callSubscriber(this._state);
//     },
//     dispatch(action){
//         movieReducer(this._state, action)
//         this._callSubscriber(this._state);
//     }
// }
// // export const addMovieActionCreator=()=>({type: ADD_MOVIE})
// // export const updateNewMovieTextActionCreator=text=>({type:UPDATE_NEW_MOVIE_TEXT,newText:text})


// export default store;
