import {
  BLACK,
  GREY_900,
  GREY_LIGHT_100,
  GREY_LIGHT_300,
  GREY_LIGHT_50,
  PURPLE_DARK_200,
  PURPLE_DARK_800,
  PURPLE_DARK_900,
  PURPLE_LIGHT,
  WHITE,
} from 'assets/colors';
import {SPACES} from 'assets/const';
import {StyleSheet} from 'react-native';
import {resize} from 'utils/resize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: resize(SPACES.LG),
    borderLeftWidth: resize(10),
    borderColor: PURPLE_DARK_200,
    paddingVertical: resize(SPACES.XL, 'height'),
    flexDirection: 'row',
  },
  indicator: {
    width: resize(SPACES.LG),
    height: resize(SPACES.LG),
    borderRadius: resize(SPACES.LG / 2),
    backgroundColor: PURPLE_DARK_800,
    marginLeft: -resize((SPACES.LG + 10) / 2),
    marginTop: resize(SPACES.MD),
  },
  card: {
    marginLeft: resize(SPACES.XL),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  dateTextContainer: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: resize(SPACES.LG),
    marginRight: resize(SPACES.LG),
    paddingVertical: resize(SPACES.MD, 'height'),
    paddingHorizontal: resize(SPACES.LG),
    marginBottom: resize(SPACES.XL, 'height'),
  },
  dateText: {
    color: PURPLE_DARK_900,
    fontSize: resize(40),
    fontWeight: 'bold',
  },
  jobText: {
    fontSize: resize(50),
    color: GREY_900,
    fontWeight: 'bold',
  },
  jobDescriptionText: {
    marginTop: resize(SPACES.SM, 'height'),
    fontSize: resize(50),
    color: GREY_LIGHT_300,
    fontWeight: 'bold',
  },
  contactContainer: {
		paddingHorizontal: resize(SPACES.XL),
		marginHorizontal: resize(SPACES.MD),
		paddingTop: resize(SPACES.XL,'height'),
		marginBottom: resize(SPACES.XL,'height'),
    borderColor: GREY_LIGHT_300,
		borderRadius: resize(SPACES.XL),
		borderWidth: resize(4)
  },
	contactName: {
		fontSize: resize(50),
		fontWeight: 'bold',
		marginBottom: resize(SPACES.MD, 'height'),
	},
	contactPhone: {
		fontSize: resize(50),
		fontWeight: '200',
		marginBottom: resize(SPACES.XL, 'height'),
	}
});
