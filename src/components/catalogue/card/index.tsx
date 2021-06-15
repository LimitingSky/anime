import React from "react";
import { GestureResponderEvent, View, TouchableOpacity } from "react-native";
import { CustomImage } from "components/commons/image";
import { CustomText } from "components/commons/text";
import styles from './styles'
import FastImage, { Source } from "react-native-fast-image";
import { useState } from "react";

export interface ICatalogueCard {
	image: string|number|Source;
	title: string;
	subtitle: string;
	onPress?: (event: GestureResponderEvent) => void;
}

export const CatalogueCard = (props:ICatalogueCard)=> {
	const [image] = useState<number|Source>(typeof props.image != "string" ? props.image : {
		uri:props.image,
		priority: FastImage.priority.high
	})
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<View style={styles.imageContainer}>
				<CustomImage 
					style={styles.image} 
					source={image}
				/>
			</View>
			<CustomText style={styles.title}>{props.title}</CustomText>
		</TouchableOpacity>
	)
}

CatalogueCard.defaultProps = {
	image:"https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	title: 'Title',
	subtitle: "Subtitle"
}