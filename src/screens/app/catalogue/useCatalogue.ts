import { useNavigation } from '@react-navigation/native';
import { fetchGenders } from 'api/genders';
import { Category } from 'components/catalogue/categoriesHorizontalList';
import React, { useEffect, useState } from 'react'
import { INavigateMethod } from 'router';

export const useCatalogue = () => {
	const navigation = useNavigation()
	const [categorySelected, setCategorySelected] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const [pageNumber, setPageNumber] = useState<number>(0);
	const [pageItemForPage, setItemForPage] = useState<number>(5);
	const [lastPage, setLastPage] = useState<number>(1);
	const [isLoadingMore, setIsLoadingMore] = useState<Boolean>(true);
	const [genders,setGenders] = useState<Category[]>([]);
	const [dataByGender,setDataByGender] = useState([]);

	const handleChangeCategory = (newCategory:number) => setCategorySelected(newCategory)

	const navigateTo = ({screen,params}:INavigateMethod) => navigation.navigate(screen,params)

	const handleGetCategories = async () => {
		try {
			const params = {
        'page[limit]': pageItemForPage,
        'page[offset]': pageNumber,
      };
			const response = await fetchGenders(params);
			const newGenders:Category[] = genders.concat(response.data.data)
			setGenders(newGenders);
			setCategorySelected(newGenders[0].id)
		} catch (error) {
			console.log({error});
		} finally{
			setIsLoading(false);
			setIsLoadingMore(false);
		}
	}

	useEffect( () => {
		handleGetCategories()
	},[])

	return {
		category: {
			value:categorySelected,
			change: handleChangeCategory,
			options: genders
		},
		navigateTo,
		paginateInformation: {
			currentPage: pageNumber,
			lastPage,
			changePage: setPageNumber
		}
	}
}