import React from 'react';
import './App.css';

import movies from './movies';

import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      movie: ''
    }
  }

  render() {
    // console.log(Object.keys(movies));
    return (
      <div className="App">
        <GenreList 
          genres={Object.keys(movies)} 
          handleClick={this._setGenre}
        />
        {
          this.state.genre ? <MovieList 
                                movies={Object.keys(movies[this.state.genre])}
                                handleClick={this._setMovie}
                              /> : null
        }
        {
          this.state.movie ? <ActorList 
                                actors={movies[this.state.genre][this.state.movie]}
                              /> : null 
        }
      </div>
    );
  }

  // Helper functions should be defined in the same 
  // class where the state is.
  _setGenre = (genre) => {
    console.log(`You picked ${genre}`)
    //Instead of accepting the event object,
    // just accept the smallest piece of information
    // needed to set state.
    this.setState({
      // genre: genre
      // When the key and value are the same word,
      // you can omit the ": genre" 
      genre,
      movie: ''
    });
  }

  _setMovie = (movie) => {
    console.log(`You picked ${movie}`)

    this.setState({
      movie
    });
  };

}

export default App;