import { FontsTypes } from "assets/fonts";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export interface IStyles {
	[x:string]: object
}

const styles: IStyles = StyleSheet.create({
	title: {
		// fontFamily: FontsTypes.BOLD,
		fontSize: resize(60),
	},
	regular: {
		// fontFamily: FontsTypes.REGULAR,
		fontSize: resize(60),
	},
	subtitle: {
		// fontFamily: FontsTypes.BOLD,
		fontSize: resize(60),
		fontWeight: '500'
	},
})
export default styles