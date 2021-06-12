import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomText} from 'components/commons/text';
import {CatalogueCard} from 'components/catalogue/card';
import Container from 'components/commons/container';
import {BLUE_50, BLUE_900} from 'assets/colors';
import {ModeButton} from 'components/catalogue/button';
import { ItemList } from 'components/catalogue/itemList';
import animeIcon from 'assets/images/icons/anime.png';
import mangaIcon from 'assets/images/icons/manga.png';
import styles from './styles';

interface ICatalogueView {}

export default function CatalogueView(props: ICatalogueView) {
  return (
    <Container>
      <FlatList
        data={Array.from({length:3})}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => <ItemList />}
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
            <View style={styles.modeContainer}>
						<CatalogueCard />
						<CatalogueCard />
						<CatalogueCard />
						</View>
          </View>
        }
      />
    </Container>
  );
}
