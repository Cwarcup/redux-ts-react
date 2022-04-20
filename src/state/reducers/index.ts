import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// state is an object with a repositories key
// and a value from the repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
// we now have a type that represents the data in our store.
