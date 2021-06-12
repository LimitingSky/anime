import React from 'react';
import {View} from 'react-native';
import {CustomText} from 'components/commons/text';
import styles from './styles';
import {ReactNode} from 'react';

interface ITimeLineItem {
  start: string;
  end: string;
  job: string;
  description: string;
  company: string;
}

export const TimeLineItem = (props: ITimeLineItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.indicator} />
        <View style={styles.card}>
          <View style={styles.timeContainer}>
            <Badge>{props.start}</Badge>
            <Badge>{props.end}</Badge>
            <Badge>{props.company}</Badge>
          </View>
          <CustomText style={styles.jobText}>{props.job}</CustomText>
          <CustomText style={styles.jobDescriptionText}>
            {props.description}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

interface IBadge {
  children: ReactNode;
}

export const Badge = (props: IBadge) => {
  return (
    <View style={styles.dateTextContainer}>
      <CustomText style={styles.dateText}>{props.children}</CustomText>
    </View>
  );
};

interface IContactItem {
	name:string
	phone:string
	job:string
	relationship:string
}

export const ContactItem = (props:IContactItem) => {
	return <View style={styles.contactContainer}>
		<CustomText style={styles.contactName}>{props.name}</CustomText>
		<CustomText style={styles.contactPhone}>{props.phone}</CustomText>
		<View style={styles.timeContainer}>
			<Badge>{props.job}</Badge>
			<Badge>{props.relationship}</Badge>
		</View>
	</View>
}