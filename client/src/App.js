import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { homedir } from 'os';

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
        <Route 
          exact 
          path='/' 
          render={(props) => 
            <MovieList
              addToSavedList={this.addToSavedList}
              {...props}
            />
          } 
        />
        <Route path='/movies/:id' render={(props) => 
          <Movie 
            addToSavedList={this.addToSavedList} 
            {...props}
          />}
        />
      </div>
    );
  }
}
