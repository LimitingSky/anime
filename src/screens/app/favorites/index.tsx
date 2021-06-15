import React from 'react';
import {View,FlatList} from 'react-native';

import {CustomText} from 'components/commons/text';
import Container from 'components/commons/container';
import {connect} from 'react-redux';
import {ItemBase} from '../detail/useDetail';
import { ItemList } from 'components/catalogue/itemList';
import useFavorites from './usefavorites';

function FavoriteView(props:IFavoriteView) {
	
	const {data,seeDetail,handleAddToFavorites} = useFavorites()

  return (
    <Container>
      <CustomText>Favorite List</CustomText>
			<FlatList
				data={props.anime}
				renderItem={({item, index}: {item: any; index: number})=><ItemList
				image={item.attributes.posterImage.small}
				rate={Number(item.attributes.averageRating)}
				title={item.attributes.canonicalTitle}
				subtitle={item.attributes.synopsis}
				onPress={() => seeDetail(item)}
				onPressFavorite={() => handleAddToFavorites(item,index)}
				isFavorite={item.isFavorite}
			/>}
			/>
    </Container>
  );
}

const mapStateToProps = ({
  favorites,
}: {
  favorites: {
    anime: string;
    manga: string;
  };
}) => ({
  anime: JSON.parse(favorites.anime),
  manga: JSON.parse(favorites.manga),
});

export default FavoriteView;
