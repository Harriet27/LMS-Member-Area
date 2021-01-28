import { combineReducers } from 'redux';
import product from './productReducer';
import { contentReducer } from './contentReducer';

export default combineReducers({
    product,
    content: contentReducer,
});