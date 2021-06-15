import React from 'react';
import FastImage from 'react-native-fast-image';
import {View, TouchableOpacity, GestureResponderEvent, Image} from 'react-native';
import {CustomText} from 'components/commons/text';
import {CustomImage} from 'components/commons/image';
import starImage from 'assets/images/icons/star.png';
import bookmarkImage from 'assets/images/icons/bookmark.png';
import bookmarkFulled from 'assets/images/icons/bookmarkFulled.png';
import styles from './styles';
import {ICatalogueCard} from '../card';
import { useState } from 'react';

interface IItemList extends ICatalogueCard {
  rate: number;
  isFavorite: Boolean;
  onPressFavorite?: (event: GestureResponderEvent) => void;
}

export const ItemList = (props: IItemList) => {

	const [information,setInformation] = useState({
		subtitle: props.subtitle.substring(0,100),
		truncate: props.subtitle.length>100,
	})
	
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.rightContent}>
        <View style={styles.imageContainer}>
          <CustomImage
						style={styles.image}
            source={{
              uri: props.image,
              priority: FastImage.priority.high,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{props.title}</CustomText>
          <CustomText style={styles.subtitle}>{information.subtitle}{information.truncate&&<CustomText>...</CustomText>}</CustomText>
					<View style={styles.rightContent}>
						<Image source={starImage} style={styles.rateIcon} />
						<CustomText style={styles.rateText}>{props.rate}</CustomText>
					</View>
        </View>
      </View>
			<TouchableOpacity style={styles.bookmarkButton} onPress={props.onPressFavorite}>
				<Image source={props.isFavorite?bookmarkFulled:bookmarkImage} style={styles.bookmarkIcon} />
			</TouchableOpacity>
    </TouchableOpacity>
  );
};

ItemList.defaultProps = {
	image:"https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	title: 'Title',
	subtitle: "Subtitle",
	rate: 0
}
