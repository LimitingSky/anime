import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";

interface IData {
	image: string;
	title: string;
	rate: number;
	synopsys: string;
}

export const useDetail = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const [data,setData] = useState<IData>({
		image: "https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Anime",
		rate: 0,
		synopsys: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
	});

	const goBack = () => navigation.goBack();

	return {
		data,
		back:goBack
	}
}