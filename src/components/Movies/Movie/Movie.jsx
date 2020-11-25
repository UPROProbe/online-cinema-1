import React from 'react';
import "./Movie.css"

const Movie = (props) => {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card"  >
        <h5 className="card-title">{props.title}</h5>
        <img src={props.image} className="card-img-top" alt="Photo" />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.tags}</li>
        </ul>
        <div className="card-body btn">
          <a href="#" className="card-link">Tickets</a>
        </div>
      </div>
    </div>
  )
}
export default Movie;