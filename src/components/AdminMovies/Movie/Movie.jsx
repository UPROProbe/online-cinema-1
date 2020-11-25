import React from 'react';
import style from "./Movie.css"
const Movie = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td><img src={props.image} alt="Photo" /></td>
            <td>{props.tags}</td>
            <td><button type="button" className="btn remove">Remove</button></td>
            <td><button type="button" className="btn unbook">Edit</button></td>
        </tr>
    )
}
export default Movie;