import { WHITE } from "assets/colors";
import { SPACES, WIDTH_DESIGN } from "assets/const";
import { StyleSheet } from "react-native";
import { resize } from "utils/resize";

const HEADER_WITHOUT_PADDING =  WIDTH_DESIGN-(SPACES.XL*2)
const TITLE_WIDTH = (HEADER_WITHOUT_PADDING/2)*1.3

export default StyleSheet.create({
	container: {
		backgroundColor: WHITE,
		paddingBottom: resize(SPACES.XL,'height'),
		borderBottomRightRadius: resize(SPACES.XXL),
	},
	headerContainer: {
		width:'100%',
		paddingHorizontal: resize(SPACES.XL),
		paddingTop: resize(SPACES.XL,'height'),
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems: 'flex-end',
		backgroundColor: WHITE,
	},
	headerContainerShadows:{
	
		marginBottom: resize(SPACES.LG),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.10,
		shadowRadius: 3,
		elevation: 3,
	},
	title: {
		width:resize(TITLE_WIDTH),
		fontWeight: "bold",
		fontSize: resize(90)
	},
	modesContainer:{
		marginLeft: resize(SPACES.XL),
		alignItems: 'flex-end',
		justifyContent:'space-around',
	},
	horizontalCardsContainer: {
		flexDirection: 'row',
		backgroundColor: WHITE
	},
	noResultsContainer: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	noResultsImageContainer: {
		width: resize(500),
		height: resize(500),
		borderRadius: resize(SPACES.LG),
		marginVertical: resize(SPACES.XL),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	noResultsImage: {
		width: resize(500),
		height: resize(500),
		resizeMode: "cover",
		backgroundColor: WHITE,
		borderRadius: resize(SPACES.LG),
	}
})