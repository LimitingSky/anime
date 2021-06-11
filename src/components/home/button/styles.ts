import { GREY_LIGHT } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	container: {
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems: "center",
		marginBottom: resize(SPACES.XL,'height')
	},
	rightContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	rightIconContainer: {
		width: resize(100),
		height: resize(100),
		borderRadius: resize(100/2),
		justifyContent: "center",
		alignItems: 'center',
		marginRight: resize(SPACES.XL)
	},
	rightIcon:{
		width: resize(60),
		height: resize(60),
		resizeMode: "contain"
	},
	leftContent: {
		padding: resize(25),
		borderRadius: resize(20),
		backgroundColor: GREY_LIGHT
	}
})