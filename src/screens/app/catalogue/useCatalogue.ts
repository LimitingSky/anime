import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { INavigateMethod } from 'router';

export const useCatalogue = () => {
	const navigation = useNavigation()
	const [categorySelected, setCategorySelected] = useState<number>(0);

	const handleChangeCategory = (newCategory:number) => setCategorySelected(newCategory)

	const navigateTo = ({screen,params}:INavigateMethod) => navigation.navigate(screen,params)

	return {
		category: {
			value:categorySelected,
			change: handleChangeCategory
		},
		navigateTo
	}
}