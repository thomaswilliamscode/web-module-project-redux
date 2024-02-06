import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    

    const movies = useSelector( (state) => state.list)
    const movie = movies.find(movie=>movie.id===Number(id));
    const dispatch = useDispatch()

    const add_favorite = 'add_favorite'

    const addFavorite = () => {
        const action = { type: 'add_favorite', 
            payload: { id: movie.id } }
        dispatch(action)
    }

    // delete movie from list
    const deleteMovie = (id) => {
        const action = {type: 'delete_movie', payload: { id: id} }
        dispatch(action)
    }
    
    if (!movie) {
        return <Redirect to ="/movies"></Redirect>
    } else {
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={addFavorite}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger"  value="Delete" onClick={() => deleteMovie(movie.id)}/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
}

export default Movie;