import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";

interface IData {
	image: string;
	title: string;
	rate: number;
	synopsys: string;
}

export const useDetail = () => {
	const {params} = useRoute();
	const navigation = useNavigation();
	const [data,setData] = useState<any>(params);

	const goBack = () => navigation.goBack();

	return {
		data,
		back: goBack,
	}
}