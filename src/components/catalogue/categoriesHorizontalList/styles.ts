import { WHITE } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	rootContainer: {
		backgroundColor:WHITE
	},
	container: {
		paddingHorizontal: resize(SPACES.LG),
		backgroundColor: WHITE,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -10,
		},
		shadowOpacity: 0.10,
		shadowRadius: 3,
		elevation: 3,
		paddingVertical: resize(SPACES.XL,'height'),
		borderTopLeftRadius: resize(SPACES.XXL)
	},
})