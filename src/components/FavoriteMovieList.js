import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


const FavoriteMovieList = (props) => {
    const favorites = useSelector( (state) => state.favorites)
    const showFavorites = useSelector( (state) => state.showFavorites )

    const dispatch = useDispatch();

    const removeFavorite = (movieID) => {
        const action = { type: 'remove_favorite', payload: { id: movieID } } 
        dispatch(action)
    }

    const redirect = () => {
			return <Redirect to='/movies'></Redirect>;
		};

    const main = () => {
        return (
            <div>
                <h5>Favorite Movies</h5>
				{favorites.map((movie) => (
						<div key={movie.id}>
							<Link
								className='btn btn-light savedButton'
								to={`/movies/${movie.id}`}>
                                {movie.title}
                                <span>
                                    <span className='material-icons' onClick={() => removeFavorite(movie.id)} >remove_circle
                                    </span>
                                </span>
                            </Link>
						</div>
					))}
                </div>)
    }
    
    return (
			<div className='col-xs savedContainer'>
				{ showFavorites ? main() : redirect() }
			</div>
		);
}


export default FavoriteMovieList;