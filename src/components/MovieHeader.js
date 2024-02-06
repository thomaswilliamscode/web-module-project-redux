import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'

const MovieHeader = (props) => {
    const appTitle = "";
    const displayFavorites = useSelector( (state) => state.showFavorites)

    const dispatch = useDispatch()

    const toggleFavorites = () => {
        const action = { type: 'toggle_favorites'}
        dispatch(action)
    }
    
    return(
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>{appTitle}</h2>
            </div>
            <div className="col-sm-6 headerBar">
                <div className="btn btn-sm btn-primary" onClick = { toggleFavorites } ><span>{ displayFavorites ? 'Hide' : 'Show' } Favorites </span></div>
                <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
                <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            </div>
        </div>
    </div>
    );
}

export default MovieHeader;