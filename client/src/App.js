import React, { Component } from 'react';
import { Route } from 'react-router';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
      <Route path='/' exact component={MovieList}></Route>
        <Route path='/movies/:id' component={Movie}></Route>
      </div>
    );
  }
}
