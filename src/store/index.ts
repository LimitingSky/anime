import { createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import favoriteReducer from './reducers/favorites';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: []
}

const favoritePersistConfig = {
	key: 'favorites',
	storage: AsyncStorage,
	blacklist: [],
};

const rootReducer = combineReducers({
	favorites: persistReducer(favoritePersistConfig, favoriteReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store);

export { store, persistor };