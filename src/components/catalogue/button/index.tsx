import React from 'react';
import {GestureResponderEvent, ImageSourcePropType} from 'react-native';
import {TouchableOpacity, View, Image} from 'react-native';
import {CustomText} from 'components/commons/text';
import styles from './styles';
import {GREEN_50, GREEN_900} from 'assets/colors';

interface ModeButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  icon?: ImageSourcePropType;
  colors: string[];
	selected:boolean
}

export const ModeButton = (props: ModeButton) => {
  return (
    <TouchableOpacity
			onPress={props.onPress}
			style={[styles.container,!props.selected&&{transform: [{scale:0.8}]}]}
		>
      <View 
				style={[
					styles.iconContainer,
					{backgroundColor: props.colors[0]}
				]}
			>
        <CustomText style={[styles.capitalLetter,{color:props.colors[1]}]}>
				{props.title.substring(0,1).toUpperCase()}
				</CustomText>
      </View>
			<CustomText style={styles.text}>{props.title.substr(1,props.title.length)}</CustomText>
    </TouchableOpacity>
  );
};

ModeButton.defaultProps = {
  onPress: () => {},
  colors: [GREEN_50, GREEN_900],
};
