import { GREY_LIGHT_100, GREY_LIGHT_400, GREY_LIGHT_50, WHITE, YELLOW_300 } from "assets/colors";
import { SPACES, WIDTH_DESIGN } from "assets/const";
import { StyleSheet } from "react-native";
import { resize, width } from "utils/resize";

const HEIGHT_CARD = width*1.3

const COVER_WIDTH = 300;
const COVER_HEIGHT= COVER_WIDTH*1.3;

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: WHITE
	},
	headerButtonsContainer: {
		paddingHorizontal: resize(SPACES.XL),
		paddingVertical: resize(SPACES.LG),
		position:"absolute",
		left: 0,
		width: '100%',
		zIndex: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	headerButton: {
		padding: resize(SPACES.LG),
		borderRadius: resize(SPACES.LG),
		backgroundColor: WHITE,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerButtonImage: {
		width: resize(60),
		height: resize(60),
		resizeMode: "contain"
	},
	headerContainer:{
		width: width,
		height: HEIGHT_CARD,
		position: 'absolute',
		top: 0,
		left: 0
	},
	header: {
		width: width,
		height: HEIGHT_CARD,
		resizeMode: "center"
	},
	cardContainer:{
		width: width,
		backgroundColor: WHITE,
		borderTopLeftRadius: resize(SPACES.XXL),
		marginTop: HEIGHT_CARD*.8,
	},
	headerTitleContainer: {
		paddingHorizontal: resize(SPACES.XL),
		flexDirection: 'row',
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: resize(90),
		maxWidth: resize(WIDTH_DESIGN*.78)
	},
	rateContainer:{
		flexDirection: 'row',
		marginLeft: resize(20),
		marginTop: resize(15,'height'),
		alignItems: 'center',
		alignSelf: 'flex-start'
	},
	rateIcon: {
		width: resize(40),
		height:resize(40),
		resizeMode: "contain",
		tintColor: YELLOW_300,
		marginRight: resize(13)
	},
	rateText: {
		color: GREY_LIGHT_400,
		fontSize: resize(50)
	},
	moreInformationContainer: {
		width: '100%',
		paddingTop:resize(SPACES.XL),
		paddingHorizontal: resize(SPACES.XL),
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	moreInformationItem:{
		flexDirection:'row',
		paddingLeft: resize(SPACES.XL),

	},
	coverImageContainer: {
		width: resize(COVER_WIDTH),
		height: resize(COVER_HEIGHT),
		borderRadius: resize(SPACES.MD),
		backgroundColor: WHITE,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.10,
		shadowRadius: 3,
		elevation: 3,
	},
	coverImage: {
		width: resize(COVER_WIDTH),
		height: resize(COVER_HEIGHT),
		borderRadius: resize(SPACES.MD),
		resizeMode: "contain",
		overflow:'hidden'
	},
	popularityRankText: {
		paddingRight: resize(SPACES.MD),
		fontWeight: 'bold',
		fontSize: resize(50)
	},
	popularityRankSubtext: {
		fontSize: resize(50),
		fontWeight: '300',
	},
	descriptionContainer: {
		borderTopColor: GREY_LIGHT_100,
		borderTopWidth: resize(SPACES.SM),
		marginTop: resize(SPACES.XL,'height'),
		paddingTop: resize(SPACES.XL,'height'),
		paddingHorizontal: resize(SPACES.XL),	
	},
	descriptionTitle: {
		fontWeight: 'bold',
		fontSize: resize(70),
		marginBottom: resize(70,'height')
	},
	descriptionSubtitle: {
		fontWeight: '300',
		fontSize: resize(60),
	},
})