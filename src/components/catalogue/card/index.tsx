import React from "react";
import { GestureResponderEvent, View, TouchableOpacity } from "react-native";
import { CustomImage } from "components/commons/image";
import { CustomText } from "components/commons/text";
import styles from './styles'
import FastImage from "react-native-fast-image";

export interface ICatalogueCard {
	image: string;
	title: string;
	subtitle: string;
	onPress?: (event: GestureResponderEvent) => void;
}

export const CatalogueCard = (props:ICatalogueCard)=> {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<View style={styles.imageContainer}>
				<CustomImage 
					style={styles.image} 
					source={{
						uri:props.image,
						cache:FastImage.cacheControl.cacheOnly,
						priority: FastImage.priority.high
					}}
				/>
			</View>
			<CustomText style={styles.title}>{props.title}</CustomText>
			<CustomText style={styles.subtitle}>{props.subtitle}</CustomText>
		</TouchableOpacity>
	)
}

CatalogueCard.defaultProps = {
	image:"https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	title: 'Title',
	subtitle: "Subtitle"
}