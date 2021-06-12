import { BLACK, GREY_900, GREY_LIGHT, GREY_LIGHT_100, GREY_LIGHT_300, GREY_LIGHT_400, RED_400 } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	container: {
		paddingHorizontal: resize(SPACES.LG),
	},
	title: {
		color: GREY_LIGHT_400,
		fontSize: resize(30),
		fontWeight: 'bold'
	},
	titleActive: {
		color: RED_400
	},
	indicatorContainer: {
		marginTop: resize(SPACES.LG,'height'),
		width:'100%',
		paddingHorizontal: resize(SPACES.LG),
		height: resize(5),
	},
	indicator: {
		height: resize(5),
		borderRadius: resize(5),
		width:'100%',
		backgroundColor: RED_400
	}
})