import {ADD_FAVORITE_ANIME,ADD_FAVORITE_MANGA} from './types';

export const addFavoriteAnime = (items:string) => ({type:ADD_FAVORITE_ANIME,payload:items})
export const addFavoriteManga = (items:string) => ({type:ADD_FAVORITE_MANGA,payload:items})