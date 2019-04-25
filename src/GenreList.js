import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array  */}
            {
                props.genres.map((genre, i) => <li key={i}>{genre}</li>)
            }
        </ul>
    );
}

export default GenreList;