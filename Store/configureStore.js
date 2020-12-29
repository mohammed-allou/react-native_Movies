/* eslint-disable prettier/prettier */
import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
export default createStore(toggleFavorite);
