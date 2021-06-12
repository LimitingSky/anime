import React, { useState } from 'react'

export const useCatalogue = () => {
	const [categorySelected, setCategorySelected] = useState<number>(0);

	const handleChangeCategory = (newCategory:number) => setCategorySelected(newCategory)

	return {
		category: {
			value:categorySelected,
			change: handleChangeCategory
		}
	}
}