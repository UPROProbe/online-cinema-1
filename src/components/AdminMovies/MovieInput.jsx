import React from 'react';

const MovieInput = (props) => {

    let ref = React.createRef();
    
    return (
        <td>
            <input
                onChange={() => { props.updateNewMovieText(ref.current.value, props.field) }}
                value={props.newMovieText}
                ref={ref}
                className='form-control' type='text'        
            />
        </td>

    )
}
export default MovieInput;