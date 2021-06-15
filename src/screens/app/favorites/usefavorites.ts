import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DETAIL_VIEW } from "router/types";
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
	const navigation = useNavigation()
	const {anime,manga}:IFavoriteView = useSelector(({favorites}: IStore) => ({
		anime: JSON.parse(favorites.anime),
		manga: JSON.parse(favorites.manga),
	}));
	const [data,setData] = useState<ItemBase[]>(anime);	
	const [mode,setMode] = useState<string>();

	const seeDetail = (favorite:ItemBase) => navigation.navigate(DETAIL_VIEW,favorite)

	const goBack = () => navigation.goBack()

	const handleAddToFavorites = () => {}

	return {
		data,
		seeDetail,
		back:goBack,
		handleAddToFavorites
	}
}