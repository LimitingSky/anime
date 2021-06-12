import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import AuthorProfileImage from '@assets/images/author/author.jpg';
import personalIcon from '@assets/images/icons/personal.png';
import workIcon from '@assets/images/icons/work.png';
import ticketStar from '@assets/images/icons/ticketStar.png';
import {CustomImage} from '@components/commons/image';
import {CustomText, TextMode} from '@components/commons/text';
import {HomeButton} from 'components/home/button';
import styles from './styles';
import {
  BLUE_DARK,
  BLUE_LIGHT,
  ORANGE,
  ORANGE_LIGHT_100,
  PURPLE_DARK,
  PURPLE_LIGHT,
} from 'assets/colors';
import {useHomeView} from './useHomeView';
import {CATALOGUE_VIEW, TIME_LINE_VIEW} from 'router/types';
import Container from '@components/commons/container';

export default function HomeView() {
  const {navigateTo} = useHomeView();

  const navigateToTimeLine = () => navigateTo({screen: TIME_LINE_VIEW});

  const navigateToCatalogue = () => navigateTo({screen: CATALOGUE_VIEW});

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <View style={styles.profileImageContainer}>
            <CustomImage
              source={AuthorProfileImage}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.profileImageContainerFirstOutline}
            />
          </View>
          <View style={styles.rightHeaderInformationContainer}>
            <CustomText mode={TextMode.SUBTITLE}>Developer</CustomText>
            <CustomText>7049 6200</CustomText>
          </View>
        </View>
        <CustomText mode={TextMode.TITLE} style={styles.firstName}>
          Luis Fernando
        </CustomText>
        <CustomText mode={TextMode.SUBTITLE} style={styles.secondName}>
          Garcia Garcia
        </CustomText>
        <View style={styles.sectionContainer}>
          <CustomText style={styles.informationTitle}>Infomation</CustomText>
          <HomeButton
            title="Personal"
            icon={personalIcon}
            colors={[ORANGE_LIGHT_100, ORANGE]}
          />
          <HomeButton
            title="Professional"
            onPress={navigateToTimeLine}
            icon={workIcon}
            colors={[BLUE_LIGHT, BLUE_DARK]}
          />
          <HomeButton
						onPress={navigateToCatalogue}
            title="Watch Anime or Manga"
            icon={ticketStar}
            colors={[PURPLE_LIGHT, PURPLE_DARK]}
          />
        </View>
      </View>
    </Container>
  );
}
