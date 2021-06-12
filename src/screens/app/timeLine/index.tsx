import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {CustomText} from 'components/commons/text';
import {Badge, TimeLineItem, ContactItem} from 'components/timeline';
import {CustomImage} from 'components/commons/image';
import Container from 'components/commons/container';
import AuthorProfileImage from '@assets/images/author/author.jpg';
import arrowLeft from '@assets/images/icons/arrowLeft.png';
import contact from '@assets/images/icons/contact.png';
import timeline from '@assets/images/icons/timeline.png';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {CONTACT_TYPE, TIMELINE_TYPE, useTimeLineView} from './useTimelineView';
import * as authorData from 'assets/data/author.json';

const Icons = {
	[CONTACT_TYPE]: contact,
	[TIMELINE_TYPE]: timeline
}

const DataType = {
	[CONTACT_TYPE]: "references",
	[TIMELINE_TYPE]: "jobs"
}

export default function TimeLineView() {
  const {back,changeMode,mode} = useTimeLineView();

	const handleChangeMode = () => changeMode(mode===CONTACT_TYPE?TIMELINE_TYPE:CONTACT_TYPE)

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={back} activeOpacity={1} style={styles.button}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
					<TouchableOpacity onPress={handleChangeMode} style={styles.button}>
						<Image source={Icons[mode]} />
					</TouchableOpacity>
        </View>
        <View style={styles.list}>
          <View style={styles.headerContent}>
            <View style={styles.profileImageContainer}>
              <CustomImage
                source={AuthorProfileImage}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.profileImageContainerFirstOutline}
              />
            </View>
            <View>
              <CustomText style={styles.namesText}>
                {authorData.names}
              </CustomText>
              <CustomText style={styles.surnamesText}>
                {authorData.surnames}
              </CustomText>
              <View style={styles.badgeContainer}>
                <Badge>{authorData.job}</Badge>
              </View>
            </View>
          </View>
          <FlatList
            data={authorData[DataType[mode]]}
						showsVerticalScrollIndicator={false}
            keyExtractor={item => JSON.stringify(item)}
            renderItem={({item}) => (
              mode===TIMELINE_TYPE?<TimeLineItem
                job={item.title}
                description={item.description}
                start={item.start}
                end={item.end}
                company={item.company}
              />:<ContactItem {...item} />
            )}
          />
        </View>
      </View>
    </Container>
  );
}
