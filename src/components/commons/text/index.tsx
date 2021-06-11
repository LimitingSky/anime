import React from "react";
import {Text} from "react-native";
import type {TextProps} from 'react-native'
import styles from './styles'

export enum TextMode {
	TITLE = "title",
	REGULAR = "regular",
	SUBTITLE= "subtitle",
}


interface ICustomText extends TextProps {
	mode: string,
	children: any
}

export const CustomText = ({style,mode,children,...props}:ICustomText) => <Text style={[styles[mode],style]} {...props}>{children}</Text>

CustomText.defaultProps = {
	mode: TextMode.REGULAR,
	includeFontPadding: false
}