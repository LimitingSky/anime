import { BLACK, GREY_LIGHT_300 } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	container: {
		marginTop: resize(SPACES.XL),
		marginHorizontal: resize(SPACES.XL),
		paddingHorizontal: resize(SPACES.XL),
		paddingVertical: resize(SPACES.LG),
		borderRadius: resize(SPACES.LG),
		borderColor: GREY_LIGHT_300,
		borderWidth: resize(2),
	},
	textInput: {
		width: '100%',
		color: BLACK,
		fontSize: resize(30),
		fontWeight: "400",
		height: resize(60),
		paddingVertical: 0
	}
})