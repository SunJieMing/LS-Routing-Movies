import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`} key={movie.id}
            activeStyle={{ color: "#24bab3", fontWeight: "bold" }}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
