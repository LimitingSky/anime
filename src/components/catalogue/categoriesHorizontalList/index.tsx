import React from 'react';
import {View, FlatList, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Category} from './item/';
import styles from './styles'

export interface Category {
  attributes: {
		name: string
		slug: string
	}
	id: number
}

interface ICategoriesList {
  categories: Category[];
  selected?: number;
	change: Function;
}

export const CategoriesList = (props: ICategoriesList) => {
  return (
		<View style={styles.rootContainer}>
		<View style={styles.container}>
    <FlatList
      data={props.categories}
			horizontal
			showsHorizontalScrollIndicator={false}
      renderItem={({item, index}:{item:Category,index:number}) => (
				<Category
				title={item.attributes.name}
				selected={item.id == props.selected}
				onPress={()=>props.change(item.id)}
        />
				)}
				keyExtractor={(item,index) => String(item.id)}
				/>
		</View>
		</View>
  );
};
