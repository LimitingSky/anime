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
				stickyHeaderIndices={[1]}
        data={Array.from({length:30})}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => !Boolean(index)?null:<ItemList />}
        ListHeaderComponent={
					<>
          <View style={styles.headerContainer}>
            <CustomText style={styles.title}>
              Choose the mode you love
            </CustomText>
            <View style={styles.modesContainer}>
              <ModeButton
                title="anime"
                colors={[BLUE_50, BLUE_900]}
              />
              <ModeButton title="manga"/>
            </View>
          </View>
					<View style={styles.horizontalCardsContainer}>
						<CatalogueCard />
						<CatalogueCard />
						<CatalogueCard />
						</View>
					</>
        }
      />
    </Container>
  );
}
