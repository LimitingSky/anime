import { HEIGHT_DESIGN, WIDTH_DESIGN } from "assets/const";
import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');


type ResizeType = 'width' | 'height'

export const resize = (size:number, type:ResizeType = 'width') => {
	const currentSize = type === 'width' ? WIDTH_DESIGN : HEIGHT_DESIGN
	const deviceSize = type === 'width' ? width : height
	const percent = (size * 100) / currentSize
	const percentJS = percent / 100

	return deviceSize * percentJS
}