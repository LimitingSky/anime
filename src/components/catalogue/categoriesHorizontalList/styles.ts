import { WHITE } from "assets/colors";
import { SPACES, WIDTH_DESIGN } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	rootContainer: {
		borderRadius: resize(SPACES.XXL),
		width: resize(WIDTH_DESIGN*.95),
		alignSelf: 'center'
	},
	container: {
		paddingHorizontal: resize(SPACES.LG),
		backgroundColor: WHITE,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -5,
		},
		shadowOpacity: 0.10,
		shadowRadius: 3,
		elevation: 3,
		paddingVertical: resize(SPACES.XL,'height'),
		borderRadius: resize(SPACES.XXL),
	},
})