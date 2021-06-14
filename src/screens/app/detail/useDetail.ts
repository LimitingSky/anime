import { useNavigation, useRoute } from "@react-navigation/core";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Share } from "react-native";


interface ItemBase {
	id: string,
	attributes: {
		slug: string
		synopsis: string
		canonicalTitle: string
		averageRating: number | null
		popularityRank: number
		posterImage: {
			[x:string]: string
		}
		episodeCount: number
		episodeLength: number | null
		youtubeVideoId: string
	}
}

interface ParamsList extends ParamListBase {
	params: ItemBase
}

export const useDetail = () => {
	const {params} = useRoute<RouteProp<IData,"detail">>();
	const navigation = useNavigation();
	const [data,setData] = useState<ItemBase>(params);

	const goBack = () => navigation.goBack();

	const handleShare = async () => {
		try {
      const result = await Share.share({
        message: params.attributes.canonicalTitle
      });
			console.log({result})
		} catch (error) {
			console.log({error})	
		}
	}

	return {
		data,
		back: goBack,
		share: handleShare
	}
}