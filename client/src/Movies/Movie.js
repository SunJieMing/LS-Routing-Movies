import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard.js';
export default class Movie extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
 componentWillReceiveProps(newProps){
 if(this.props.match.params.id !== newProps.match.params.id){
   this.fetchMovie(newProps.match.params.id);
  }
  }

 saveMovie = (movie) => {
  const addToSavedList = this.props.addToSavedList;
  const savedList=this.props.savedList;
  
  for (let i=0; i<savedList.length; i++) {
    if (JSON.stringify(savedList[i])===JSON.stringify(movie)) {
      return;
    }
  }
    addToSavedList(this.state.movie);
   }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <MovieCard movie={this.state.movie} clickHandler={this.saveMovie}/>
    );
  }
}
