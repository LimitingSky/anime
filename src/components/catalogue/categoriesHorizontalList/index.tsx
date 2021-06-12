import React from 'react';
import {View, FlatList, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Category} from './item/';
import styles from './styles'

interface Category {
  title: string;
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
      renderItem={({item, index}) => (
				<Category
				title={item.title}
				selected={index === Number(props.selected)}
				onPress={()=>props.change(index)}
        />
				)}
				keyExtractor={(item,index) => JSON.stringify({...item,index})}
				/>
		</View>
		</View>
  );
};
