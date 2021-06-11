import React from "react";
import FastImage from "react-native-fast-image";
import type {FastImageProps} from "react-native-fast-image"

interface ICustomImage extends FastImageProps {}

export const CustomImage = (props:ICustomImage) => <FastImage {...props} />