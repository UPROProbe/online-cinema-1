import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import UserBooking from './components/UserBooking/UserBooking';
import UserSettings from './components/UserSettings/UserSettings';
import AdminMovies from './components/AdminMovies/AdminMovies';
import AdminUsers from './components/AdminUsers/AdminUsers';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className='content'>
          <Route path='/movies' render={() => <Movies movies={props.state.movies} />} />
          <Route path='/booking' render={() => <UserBooking movies={props.state.movies} />} />
          <Route path='/settings' render={() => <UserSettings />} />
          <Route path='/admin_movies' render={() => <AdminMovies movies={props.state.movies} />} />
          <Route path='/admin_users' render={() => <AdminUsers users={props.state.users}/>} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
