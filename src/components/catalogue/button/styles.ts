import { WHITE } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	container: {
		width: resize(300),
		backgroundColor: WHITE,
		paddingHorizontal: resize(SPACES.LG),
		paddingVertical: resize(SPACES.LG,'height'),
		borderRadius: resize(SPACES.LG),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.07,
		shadowRadius: 10,
		elevation: 8,
		marginRight: resize(SPACES.XL),
		marginBottom: resize(SPACES.LG),
		flexDirection:'row',
		alignItems:'center',
	},
	iconContainer: {
		width: resize(100),
		height: resize(100),
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: resize(SPACES.LG),
		marginRight: resize(SPACES.SM)
	},
	icon: {
		width: resize(70),
		height: resize(70),
		resizeMode: "contain"
	},
	capitalLetter: {
		fontSize: resize(70),
		fontWeight: 'bold',
	},
	text: {
		fontSize: resize(50),
		fontWeight: '400',
	}
})
