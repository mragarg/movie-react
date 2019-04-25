import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array  */}
            {
                props.genres.map((genre, i) => {
                    // Using explicit return so that
                    // we can have multiple statements
                    // console.log(genre);
                    return (
                        <li key={i}>
                            <a 
                            href="#"
                            onClick={() => {
                                // When you need to pass something other than
                                // the event, you need an anonymous function
                                props.handleClick(genre);
                            }}
                            >{genre}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default GenreList;