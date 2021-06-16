import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { HISTORY_TYPE } from "assets/const";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DETAIL_VIEW } from "router/types";
import { addFavoriteAnime, addFavoriteManga } from "store/reducers/favorites/actions";
import { ItemBase } from "../detail/useDetail";

interface IStore {
	favorites: {
		anime:string
		manga:string
	}
}

interface IFavoriteView {
  anime: ItemBase[];
  manga: ItemBase[];
}

export default function useFavorites(){
	const dispatch = useDispatch()
	const navigation = useNavigation()
	const {params} = useRoute()
	const favorites :IFavoriteView = useSelector(({favorites}: IStore) => ({
		anime: JSON.parse(favorites.anime),
		manga: JSON.parse(favorites.manga),
	}));
	const [data,setData] = useState<ItemBase[]>(favorites.anime);	
	const [mode,setMode] = useState<HISTORY_TYPE>(params.mode||HISTORY_TYPE.ANIME);

	const seeDetail = (favorite:ItemBase) => navigation.navigate(DETAIL_VIEW,favorite)

	const goBack = () => navigation.goBack()

	const handleAddToFavorites = (item:ItemBase,index:number) => {
			try {
				const dispatchActions:IDispatchActions = {
					[HISTORY_TYPE.ANIME]:addFavoriteAnime,
					[HISTORY_TYPE.MANGA]: addFavoriteManga
				}
				data[index].isFavorite = !data[index].isFavorite
				let newFavorites = [...data];
				const existOnFavorites = newFavorites.findIndex((favorite:ItemBase)=>favorite.id===item.id)
				if(existOnFavorites>=0){
					newFavorites.splice(existOnFavorites,1)
				} else {
					newFavorites.unshift(item);
				}
				console.log({existOnFavorites,newFavorites})
				dispatch(dispatchActions[mode](JSON.stringify(newFavorites)));
				setData(newFavorites);
			} catch (error) {
				console.log({error})
			}
	}

	useEffect(()=>{
		setData(favorites[mode])
	},[mode])

	return {
		data,
		seeDetail,
		back:goBack,
		handleAddToFavorites,
		mode: {
			actual: mode,
			change: setMode
		}
	}
}