import React from "react";
import { View } from "react-native";
import { CustomImage } from "components/commons/image";
import { CustomText } from "components/commons/text";
import styles from './styles'
import FastImage from "react-native-fast-image";

interface ICatalogueCard {
	image: string;
	title: string;
	subtitle: string
}

export const CatalogueCard = (props:ICatalogueCard)=> {
	return (
		<View style={styles.container}>
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
		</View>
	)
}

CatalogueCard.defaultProps = {
	image:"https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	title: 'Title',
	subtitle: "Subtitle"
}