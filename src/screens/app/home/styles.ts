import { BLACK, GREY, GREY_DARK, ORANGE, ORANGE_LIGHT, WHITE } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: WHITE
	},
	content: {
		paddingHorizontal: resize(SPACES.XL),
		paddingVertical: resize(SPACES.XL, 'height')
	},
	headerContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: resize(70,'height')
	},
	profileImageContainer: {
		width: resize(450),
		height: resize(450),
		borderRadius: resize(450/2),
		borderWidth: resize(30),
		borderColor: ORANGE,
		alignItems: "center",
		justifyContent:"center"
	},
	profileImageContainerFirstOutline: {
		width: resize(430),
		height: resize(430),
		borderRadius: resize(430/2),
		borderWidth: resize(30),
		borderColor: ORANGE_LIGHT
	},
	rightHeaderInformationContainer: {
		justifyContent: "space-around",
		paddingHorizontal: resize(SPACES.XL),
		paddingVertical: resize(SPACES.XL,'height'),
		borderLeftWidth: resize(5),
		borderColor: GREY,
		height: resize(430-SPACES.LG),
	},
	rightHeaderInformationText:{
		fontSize: resize(40)
	},
	firstName:{
		color:BLACK,
		fontSize: resize(100),
		fontWeight: "bold"
	},
	secondName: {
		color:GREY_DARK,
		fontSize: resize(90),
		fontWeight:"400"
	},
	sectionContainer: {
		marginTop: resize(SPACES.XL,'height')
	},
	informationTitle: {
		color: BLACK,
		marginBottom: resize(SPACES.XXL,'height')
	}
})