import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import styles from "./styles";

interface ISearchBar extends TextInputProps {}

export function SearchBar(props:ISearchBar) {
	return <View style={styles.container}>
		<TextInput
		{...props}
		style={[styles.textInput,props.style]}
		/>
	</View>
}