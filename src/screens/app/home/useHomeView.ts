import React from "react";
import { useNavigation } from "@react-navigation/native";
import { INavigateMethod } from "router";

export const useHomeView = () => {
	const navigation = useNavigation();

	const navigateTo = ({screen,params}:INavigateMethod) => navigation.navigate(screen,params)

	return{
		navigateTo
	}
}