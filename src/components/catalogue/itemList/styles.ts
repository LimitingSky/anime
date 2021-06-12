import { GREY_DARK, GREY_LIGHT_500, WHITE, YELLOW_300 } from "assets/colors";
import { SPACES } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

const IMAGE_WIDTH = 170;
const IMAGE_HEIGHT = IMAGE_WIDTH*1.5

export default StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: resize(SPACES.XL),
		flexDirection: 'row',
		backgroundColor: WHITE,
		marginBottom:resize(SPACES.XL,'height'),
	},
	rightContent: {
		flex:4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	imageContainer: {
		width: resize(IMAGE_WIDTH),
		height: resize(IMAGE_HEIGHT),
		shadowOffset: {
			width: 15,
			height: 15,
		},
		shadowOpacity: 0.20,
		shadowRadius: 10,
		elevation: 20,
		borderRadius: resize(SPACES.LG),
		marginRight: resize(SPACES.XL),
	},
	image: {
		width: resize(IMAGE_WIDTH),
		height: resize(IMAGE_HEIGHT),
		resizeMode:"contain",
		borderRadius: resize(SPACES.LG),
	},
	title: {
		marginTop: resize(SPACES.LG),
		fontSize: resize(40),
		fontWeight:'bold'
	},
	subtitle: {
		marginVertical: resize(SPACES.MD,'height'),
		fontSize: resize(40),
		fontWeight:'bold',
		color: GREY_DARK
	},
	rateIcon: {
		width: resize(50),
		height: resize(50),
		resizeMode: "contain",
		tintColor:YELLOW_300,
		marginRight: resize(SPACES.MD)
	},
	rateText: {
		marginVertical: resize(SPACES.MD,'height'),
		fontSize: resize(40),
		fontWeight:'bold',
		color: GREY_LIGHT_500
	},
	bookmarkButton: {
		flexDirection: 'row',
		justifyContent:'center',
		alignItems:'flex-start'
	},
	bookmarkIcon: {
		width: resize(50),
		height: resize(60),
		resizeMode: "stretch",
		marginTop: resize(SPACES.LG),
	}
})