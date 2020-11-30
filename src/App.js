import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserSettings from './components/UserSettings/UserSettings';
import { Route } from 'react-router-dom';
import AdminMoviesContainer from './components/AdminMovies/AdminMoviesContainer';
import MoviesContainer from './components/Movies/MoviesContainer';
import UserBookingContainer from './components/UserBooking/UserBookingContainer';
import AdminUsersContainer from './components/AdminUsers/AdminUsersContainer';

const App = (props) => {

  return (
      <div className="app">
        <Header />
        <div className='content'>
          <Route exact path='/' render={() => <MoviesContainer  />} />
          <Route path='/booking' render={() => <UserBookingContainer  />} />
          <Route path='/settings' render={() => <UserSettings />} />
          <Route path='/admin_movies' render={() => <AdminMoviesContainer />} />
          <Route path='/admin_users' render={() => <AdminUsersContainer  />} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
