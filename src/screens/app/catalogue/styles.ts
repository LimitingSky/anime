import { SPACES, WIDTH_DESIGN } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	headerContainer: {
		paddingHorizontal: resize(SPACES.XL),
		paddingTop: resize(SPACES.XXL,'height')
	},
	title: {
		width:resize((WIDTH_DESIGN/2)*1.3),
		fontWeight: "bold",
		fontSize: resize(90)
	},
	modeContainer: {
		marginTop: resize(SPACES.XXL,'height'),
		flexDirection:"row"
	},
})