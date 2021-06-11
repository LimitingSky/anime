import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {CustomText} from 'components/commons/text';
import rightArrow from '@assets/images/icons/right-arrow.png';
import styles from './styles';
import {BLACK} from 'assets/colors';

interface IHomeButton {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  icon: ImageSourcePropType;
  colors: string[];
}

export const HomeButton = (props: IHomeButton) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={props.onPress}>
      <View style={styles.rightContent}>
        {Boolean(props.icon) && (
          <View style={[styles.rightIconContainer,{backgroundColor:props.colors[0]}]}>
            <Image source={props.icon} style={[styles.rightIcon,{tintColor:props.colors[1]}]} />
          </View>
        )}
        <CustomText>{props.title}</CustomText>
      </View>
      <View style={styles.leftContent}>
        <Image source={rightArrow} />
      </View>
    </TouchableOpacity>
  );
};

HomeButton.defaultProps = {
  title: '',
  onPress: () => {},
  icon: null,
	colors: ["#FFFFFF","#000000"]
};
