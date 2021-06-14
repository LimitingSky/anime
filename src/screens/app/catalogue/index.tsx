import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomText} from 'components/commons/text';
import {CatalogueCard} from 'components/catalogue/card';
import Container from 'components/commons/container';
import {BLUE_50, BLUE_900} from 'assets/colors';
import {ModeButton} from 'components/catalogue/button';
import {ItemList} from 'components/catalogue/itemList';
import {CategoriesList} from 'components/catalogue/categoriesHorizontalList';
import styles from './styles';
import { useCatalogue } from './useCatalogue';
import { DETAIL_VIEW } from 'router/types';

interface ICatalogueView {}

export default function CatalogueView(props: ICatalogueView) {

	const {category, navigateTo} = useCatalogue()

	const seeDetail = (item:{}) => navigateTo({screen:DETAIL_VIEW,params:item})

  return (
    <Container>
      <FlatList
        stickyHeaderIndices={[1]}
        data={Array.from({length: 30})}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}:{item:any,index: number}) =>
          !Boolean(index) ? (
            <CategoriesList
              categories={category.options}
							selected={category.value}
							change={(newCategory:number)=>category.change(Number(newCategory))}
            />
          ) : (
            <ItemList onPress={()=>seeDetail(item)} isFavorite={false} />
          )
        }
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <CustomText style={styles.title}>
                Choose the mode you love
              </CustomText>
              <View style={styles.modesContainer}>
                <ModeButton title="anime" colors={[BLUE_50, BLUE_900]} />
                <ModeButton title="manga" />
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
