import React from "react";
import { View,TouchableOpacity, GestureResponderEvent } from "react-native";
import { CustomText } from "components/commons/text";
import styles from "./styles";

export interface ICategory {
	title: string;
	onPress?: (event: GestureResponderEvent) => void;
	selected:Boolean
}

export const Category = (props:ICategory) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.container}>
			<CustomText style={[styles.title, props.selected&&styles.titleActive]}>{props.title}</CustomText>
			<View style={styles.indicatorContainer}>
				{props.selected&&<View style={styles.indicator}/>}
			</View>
		</TouchableOpacity>
	)
}