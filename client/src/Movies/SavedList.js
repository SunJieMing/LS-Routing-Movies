import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function SavedList(props) {
  const history = useHistory()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span key={movie.id} className="saved-movie">{movie.title}</span>
      ))}
      
      <Link to='/'><div className="home-button" onClick={() => history.push('/')}>Home</div></Link>
    </div>
  );
}
