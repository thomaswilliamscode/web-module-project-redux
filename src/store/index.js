import { createStore } from 'redux'
import movies from '../data.js'

const initialState = {
	list: movies,
	favorites: [],
	showFavorites: true,
}


const reducer = ( state = initialState, action) => {
	const { type, payload } = action;

	let current = null;

	const addFavorite = () => {
		const { id } = payload
		findById(id)
		let info = current
		current = null;
		return {
			...state, 
			favorites: [...state.favorites, info],
		}
	}
	const removeFavorite = () => {
		const { id } = payload
		const newFavorites = state.favorites.filter ( (favorite) => {
			if (favorite.id !== id) {
				return favorite
			}
		}) 
		
		return {
			...state,
			favorites: newFavorites
		}
	}
	const deleteMovie = () => {
		const { id } = payload;
		findById(id);
		const newList = state.list.filter((object) => object.id !== id);

		return {
			...state,
			list: newList,
		};
	};

	const findById = (id) => {
		state.list.filter((object) => {
			if (object.id === id) {
				current = object
			}
		});
	};

	const toggleFavorites = () => {
		return {
			...state, 
			showFavorites: !state.showFavorites,
		}
	}

	const addMovie = () => {
		console.log(`${payload}`)
	}

	const test = () => {
		console.log('test')
	}

	
	// action types
	// add Favorite
	// remove Favorite
	// Add New Movie
	// delete Movie
	// hide Favorites
	// show Favorites
	
	switch (type) {
		case 'add_favorite':
			return addFavorite()
		case 'remove_favorite':
			return removeFavorite()
		case 'toggle_favorites':
			return toggleFavorites()
		case 'delete_movie':
			return deleteMovie()
		case 'add_movie':
			return addMovie()
		case 'test':
			return test()

		default:
			return state
	}
}

export const store = createStore(reducer)