import React from 'react';
import {GestureResponderEvent, ImageSourcePropType} from 'react-native';
import {TouchableOpacity, View, Image} from 'react-native';
import {CustomText} from 'components/commons/text';
import styles from './styles';
import {GREEN_50, GREEN_900} from 'assets/colors';

interface ModeButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  icon: ImageSourcePropType;
  colors: string[];
}

export const ModeButton = (props: ModeButton) => {
  return (
    <TouchableOpacity
			onPress={props.onPress}
			style={styles.container}
		>
      <View 
				style={[
					styles.iconContainer,
					{backgroundColor: props.colors[0]}
				]}
			>
        <Image
          source={props.icon}
          style={[styles.icon, {tintColor: props.colors[1]}]}
        />
      </View>
      <CustomText style={styles.capitalLetter}>
				{props.title.substring(0,1).toUpperCase()}
				<CustomText style={styles.text}>{props.title.substr(1,props.title.length)}</CustomText>
			</CustomText>
    </TouchableOpacity>
  );
};

ModeButton.defaultProps = {
  onPress: () => {},
  colors: [GREEN_50, GREEN_900],
};
