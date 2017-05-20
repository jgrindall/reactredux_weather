import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import SelectBookReducer from './SelectBookReducer';

const rootReducer = combineReducers({
    "books":BooksReducer,
    "selectedBook":SelectBookReducer
});

export default rootReducer;
