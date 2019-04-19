import React, { Component } from 'react'

export class MovieRow extends Component {

  viewMovie() {
    // console.log('Viewing Movie');
    // console.log(this.props.movieParam.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movieParam.id;
    window.location.href = url;
  }

  render() {
    return (
      <div>
        <div className="flex-2x movies-holder" key={this.props.movieParam.id}>
        <div className="flex-1 movie-left-details">
          <img className="poster" src={this.props.movieParam.poster_src} alt="poster" width="120px"/>
        </div>
        <div className="flex-2 movie-right-details">
          <h3 className="title">{this.props.movieParam.title}</h3>
          <p className="overview">{this.props.movieParam.overview}</p>
          <input className="view-btn" type="button" onClick={this.viewMovie.bind(this)} value="View Details"/>
        </div>
      </div>
      </div>
    )
  }
}

export default MovieRow;
