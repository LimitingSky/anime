import React from 'react';
import Container from 'components/commons/container';
import {CustomText} from 'components/commons/text';
import {CustomImage} from 'components/commons/image';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDetail} from './useDetail';
import arrowLeft from '@assets/images/icons/arrowLeft.png';
import sendIcon from '@assets/images/icons/send.png';
import FastImage from 'react-native-fast-image';
import starImage from 'assets/images/icons/star.png';
import styles from './styles';

interface IDetailView {}

export default function DetailView(params: IDetailView) {
  const {top} = useSafeAreaInsets();
  const {data, back,share} = useDetail();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomImage
          source={{
            uri: data.attributes.posterImage.original,
            priority: FastImage.priority.high,
          }}
          style={styles.header}
        />
      </View>
      <View style={[styles.headerButtonsContainer, {top}]}>
        <TouchableOpacity style={styles.headerButton} onPress={back}>
          <Image source={arrowLeft} style={styles.headerButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={share}>
          <Image source={sendIcon} style={styles.headerButtonImage} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          <SafeAreaView>
            <View style={styles.headerTitleContainer}>
              <CustomText style={styles.titleText}>
                {data.attributes.canonicalTitle}
              </CustomText>
              <View style={styles.rateContainer}>
                <Image source={starImage} style={styles.rateIcon} />
                <CustomText style={styles.rateText}>
                  {Number(data.attributes.averageRating)}
                </CustomText>
              </View>
            </View>
            <View style={styles.moreInformationContainer}>
							<View style={styles.coverImageContainer}>
							<CustomImage
          source={{
            uri: data.attributes.posterImage.original,
            priority: FastImage.priority.high,
          }}
          style={styles.coverImage}
        />
							</View>
              <View>
							<View style={styles.moreInformationItem}>
                <CustomText style={styles.popularityRankText}>
                  Popularity:
                </CustomText>
                <CustomText style={styles.popularityRankSubtext}>
                  {Number(data.attributes.popularityRank)}
                </CustomText>
              </View>
              <View style={styles.moreInformationItem}>
                <CustomText style={styles.popularityRankText}>
                  Episodes:
                </CustomText>
                <CustomText style={styles.popularityRankSubtext}>
                  {Number(data.attributes.episodeCount)}
                </CustomText>
              </View>
              <View style={styles.moreInformationItem}>
                <CustomText style={styles.popularityRankText}>
                  Duration:
                </CustomText>
                <CustomText style={styles.popularityRankSubtext}>
                  {Boolean(data.attributes.episodeLength)?`${Number(data.attributes.episodeLength)} min`:'N/A'}
                </CustomText>
              </View>
							</View>
            </View>
            <View style={styles.descriptionContainer}>
              <CustomText style={styles.descriptionTitle}>Synopsys</CustomText>
              <CustomText style={styles.descriptionSubtitle}>
                {data.attributes.synopsis}
              </CustomText>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}
