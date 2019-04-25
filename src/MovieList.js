import React from 'react';
import PropTypes from 'prop-types';

function MovieList(props) {
    return (
        <ul>
            {
                props.movies.map((movie, i) => <li key={i}>{movie}</li>)
            }
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList;