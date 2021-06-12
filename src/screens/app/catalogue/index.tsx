import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomText} from 'components/commons/text';
import Container from 'components/commons/container';
import {ModeButton} from 'components/catalogue';
import animeIcon from 'assets/images/icons/anime.png';
import mangaIcon from 'assets/images/icons/manga.png';
import styles from './styles';
import {BLUE_50, BLUE_900} from 'assets/colors';

interface ICatalogueView {}

export default function CatalogueView(props: ICatalogueView) {
  return (
    <Container>
      <FlatList
        data={[]}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => null}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <CustomText style={styles.title}>
              Choose the mode you love
            </CustomText>
            <View style={styles.modeContainer}>
              <ModeButton
                title="anime"
                icon={animeIcon}
                colors={[BLUE_50, BLUE_900]}
              />
              <ModeButton title="manga" icon={mangaIcon} />
            </View>
          </View>
        }
      />
    </Container>
  );
}
