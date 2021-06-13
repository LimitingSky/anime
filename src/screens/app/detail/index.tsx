import React from 'react';
import Container from 'components/commons/container';
import {CustomText} from 'components/commons/text';
import {CustomImage} from 'components/commons/image';
import {ScrollView, View, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDetail} from './useDetail';
import arrowLeft from '@assets/images/icons/arrowLeft.png';
import FastImage from 'react-native-fast-image';
import starImage from 'assets/images/icons/star.png';
import styles from './styles';

interface IDetailView {}

export default function DetailView(params: IDetailView) {
	const {top} = useSafeAreaInsets()
  const {data, back} = useDetail();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomImage
          source={{
            uri: data.image,
            cache: FastImage.cacheControl.cacheOnly,
            priority: FastImage.priority.high,
          }}
          style={styles.header}
        />
      </View>
			<View style={[styles.headerButtonsContainer,{top}]}>
				<TouchableOpacity style={styles.headerButton} onPress={back}>
					<Image source={arrowLeft} style={styles.headerButtonImage} />
				</TouchableOpacity>
			</View>
      <ScrollView>
        <View style={styles.cardContainer}>
          <SafeAreaView>
            <View style={styles.headerTitleContainer}>
              <CustomText style={styles.titleText}>{data.title}</CustomText>
              <View style={styles.rateContainer}>
                <Image source={starImage} style={styles.rateIcon} />
                <CustomText style={styles.rateText}>{data.rate}</CustomText>
              </View>
            </View>
						<View style={styles.descriptionContainer}>
							<CustomText style={styles.descriptionTitle}>
								Synopsys
							</CustomText>
							<CustomText style={styles.descriptionSubtitle}>
								{data.synopsys}
							</CustomText>
						</View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}
