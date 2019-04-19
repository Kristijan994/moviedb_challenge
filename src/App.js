import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieRow from './components/MovieRow';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
    // const movies = [
    //   {id: 0, poster_src:"https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg", title: 'Avengers: Infinity War', overview: '-- Description about this movie'},
    //   {id: 1, poster_src:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg", title: 'The Avengers', overview: '-- Description about this movie'}
    // ]

    // var movieRows = [];
    // movies.forEach((movieParam) => {
    //   console.log(movieParam.title);
    //   const movieRow = <MovieRow movieParam={movieParam} />
    //   movieRows.push(movieRow)
    // });

    // this.state = {rows: movieRows};

    this.performSearch("")
  }

  performSearch(searchTerm) {
    console.log("Perform search using MovieDB");
    const url_string = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;
    $.ajax({
      url: url_string,
      success: (searchResults) => {
        console.log('Fethed data successfully');
        console.log(searchResults);

        var movieRows = [];

        const results = searchResults.results;
        results.forEach((movieParam) => {
          movieParam.poster_src = "https://image.tmdb.org/t/p/w185" + movieParam.poster_path;
          // console.log(movieParam.poster_path);
          const movieRow = <MovieRow key={movieParam.id} movieParam={movieParam} />
          movieRows.push(movieRow);
        });

        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.log("Failed");
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <input onChange={this.searchChangeHandler.bind(this)} id="search" type="text" placeholder="Type to start searching.."/>

        <div>
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
