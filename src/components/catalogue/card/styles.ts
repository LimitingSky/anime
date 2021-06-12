import { GREEN_50, GREY_DARK, WHITE } from 'assets/colors';
import {HEIGHT_DESIGN, SPACES, WIDTH_DESIGN} from 'assets/const';
import {StyleSheet} from 'react-native';
import {height, resize} from 'utils/resize';

const CARD_WIDTH = (WIDTH_DESIGN - SPACES.XL * 2) / 3;
const CARD_HEIGHT = HEIGHT_DESIGN / 4;
const IMAGE_WIDTH = CARD_WIDTH
const IMAGE_HEIGHT = CARD_WIDTH*1.5

export default StyleSheet.create({
  container: {
    width: resize(CARD_WIDTH),
		paddingVertical: resize(SPACES.XL,'height'),
		marginHorizontal: resize(SPACES.XL)
  },
	imageContainer: {
		backgroundColor:WHITE,
		width: resize(IMAGE_WIDTH),
		height: resize(IMAGE_HEIGHT,'height'),
		shadowColor: "#000",
		shadowOffset: {
			width: 20,
			height: 10,
		},
		shadowOpacity: 0.20,
		shadowRadius: 10,
		elevation: 20,
		borderRadius: resize(SPACES.LG),
		marginBottom: resize(SPACES.XL,'height')
	},
	image: {
		width: resize(IMAGE_WIDTH),
		height: resize(IMAGE_HEIGHT,'height'),
		resizeMode:'contain',
		borderRadius: resize(SPACES.LG),
	},
	title: {
		fontSize: resize(40),
		fontWeight:'bold'
	},
	subtitle: {
		marginTop: resize(SPACES.MD,'height'),
		fontSize: resize(40),
		fontWeight:'bold',
		color: GREY_DARK		
	}
});
