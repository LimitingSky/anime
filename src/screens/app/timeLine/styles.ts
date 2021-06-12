import { BLACK, GREY_900, GREY_LIGHT_300, ORANGE, ORANGE_LIGHT } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

export default StyleSheet.create({
	headerContainer: {
		width: '100%',
		paddingVertical: resize(SPACES.LG,'height'),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: resize(SPACES.LG,'height')
	},
	button: {
		padding: resize(SPACES.MD)
	},
	content: {
		flex:1,
		paddingHorizontal: resize(SPACES.XL),
	},
	headerContent: {
		flexDirection: 'row',
		marginBottom: resize(SPACES.XL,'height')
	},
	profileImageContainer: {
		width: resize(250),
		height: resize(250),
		borderRadius: resize(250/2),
		borderWidth: resize(10),
		borderColor: ORANGE,
		alignItems: "center",
		justifyContent:"center",
		marginRight: resize(SPACES.XL)
	},
	profileImageContainerFirstOutline: {
		width: resize(230),
		height: resize(230),
		borderRadius: resize(230/2),
		borderWidth: resize(20),
		borderColor: ORANGE_LIGHT
	},
	namesText: {
		fontSize: resize(60),
		fontWeight: 'bold',
		color:GREY_900
	},
	surnamesText:{
		fontSize: resize(60),
		fontWeight: '300',
		color:GREY_LIGHT_300,
	},
	badgeContainer: {
		marginTop: resize(SPACES.MD,'height'),
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center'
	},
	list: {
		flex:1,
	}
})