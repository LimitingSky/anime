import React from 'react';
import {View,FlatList, TouchableOpacity} from 'react-native';
import noResultsIcon from '@assets/images/icons/noResults.jpg';
import {CustomText} from 'components/commons/text';
import Container from 'components/commons/container';
import { ItemList } from 'components/catalogue/itemList';
import useFavorites from './usefavorites';
import styles from './styles'
import { ModeButton } from 'components/catalogue/button';
import { BLUE_50, BLUE_900 } from 'assets/colors';
import { Image } from 'react-native';
import arrowLeft from '@assets/images/icons/arrowLeft.png';
import { HISTORY_TYPE } from 'assets/const';

function FavoriteView() {
	
	const {data,seeDetail,handleAddToFavorites,back, mode} = useFavorites()

  return (
    <Container>
			<View style={[styles.headerContainer]}>
				<View style={styles.headerRightContainer}>
					<TouchableOpacity style={styles.backButton} onPress={back}>
						<Image source={arrowLeft} style={styles.backImage} />
					</TouchableOpacity>
				<CustomText style={styles.title}>
					Favorites
				</CustomText>
				</View>
				<View style={styles.modesContainer}>
					<ModeButton onPress={()=>mode.change(HISTORY_TYPE.ANIME)} title={HISTORY_TYPE.ANIME} colors={[BLUE_50, BLUE_900]} selected={mode.actual===HISTORY_TYPE.ANIME} />
					<ModeButton onPress={()=>mode.change(HISTORY_TYPE.MANGA)} title={HISTORY_TYPE.MANGA} selected={mode.actual===HISTORY_TYPE.MANGA} />
				</View>
			</View>
			<FlatList
				data={data}
				renderItem={({item, index}: {item: any; index: number})=><ItemList
					image={item.attributes.posterImage.small}
					rate={Number(item.attributes.averageRating)}
					title={item.attributes.canonicalTitle}
					subtitle={item.attributes.synopsis}
					onPress={() => seeDetail(item)}
					onPressFavorite={() => handleAddToFavorites(item,index)}
					isFavorite={true}
				/>}
				ListEmptyComponent={
					<View style={styles.noResultsContainer}>
						<View style={styles.noResultsImageContainer}>
							<Image source={noResultsIcon} style={styles.noResultsImage} />
						</View>
						<CustomText style={styles.noResultsText}>{`No ${mode.actual} favorites found it, add a new one`}</CustomText>
					</View>
				}
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
