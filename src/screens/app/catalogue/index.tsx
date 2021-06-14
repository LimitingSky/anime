import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomText} from 'components/commons/text';
import {CatalogueCard} from 'components/catalogue/card';
import Container from 'components/commons/container';
import {BLUE_50, BLUE_900} from 'assets/colors';
import {ModeButton} from 'components/catalogue/button';
import {ItemList} from 'components/catalogue/itemList';
import {
  CategoriesList,
  Category,
} from 'components/catalogue/categoriesHorizontalList';
import styles from './styles';
import {DETAIL_VIEW} from 'router/types';
import {fetchGenders} from 'api/genders';
import {arrayUnique} from 'utils/parse';
import { getSearchData } from 'api/search';

interface props {
  loading: boolean;
  paginateCategories: {
    offset: number;
    itemsPerPage: number;
    loading: boolean;
    loadingMore: boolean;
  };
  categories: Category[];
	categorySelected: string,
  items: [];
  paginateItems: {
		extraData:boolean,
    offset: number;
    itemsPerPage: number;
    loading: boolean;
    loadingMore: boolean;
  };
}
export default class CatalogueView extends React.Component {
  state: props = {
    loading: true,
    paginateCategories: {
      offset: 0,
      itemsPerPage: 5,
      loading: true,
      loadingMore: true,
    },
    categories: [],
		categorySelected: "",
    items: [],
    paginateItems: {
			extraData:false,
      offset: 0,
      itemsPerPage: 5,
      loading: true,
      loadingMore: true,
    },
  };

	componentDidMount(){
		this.handleGetCategories()
	}

  seeDetail = (item: {}) => this.props.navigation.navigate(DETAIL_VIEW, item);

  handleLoadMoreItem = () => {
    const {paginateItems} = this.state;
		console.log({paginateItems})
		if(!paginateItems.loadingMore){
			this.setState({
				paginateItems: {
					...paginateItems,
					loadingMore: true,
				},
			},this.handleGetItems);
		}
  };

  handleGetCategories = async () => {
    const {paginateCategories, categories} = this.state;
    const {offset, itemsPerPage} = paginateCategories;
		this.setState({
			paginateCategories: {
				...paginateCategories,
				loading: true,
				loadingMore: true,
			},
		});
    try {
      const params = {
        'page[limit]': itemsPerPage,
        'page[offset]': offset,
      };
      const response = await fetchGenders(params);
      const newGenders: Category[] = arrayUnique(
        categories.concat(response.data.data),
      );
      this.setState({
        categories: newGenders,
        paginateCategories: {
          ...paginateCategories,
          offset: offset + itemsPerPage,
        },
				categorySelected: newGenders[0].id
      },this.handleGetItems);
    } catch (error) {
      console.log({error});
    } finally {
      this.setState({
        paginateCategories: {
          ...paginateCategories,
          loading: false,
          loadingMore: false,
        },
      });
    }
  };

	handleGetItems = async () => {
		const {paginateItems, items,categories,categorySelected} = this.state;
		console.log({paginateItems})
    const {offset, itemsPerPage} = paginateItems;
		try {
			const currentCategory = categories.find(({id})=>id==Number(categorySelected));
			if(!Boolean(currentCategory)){
				return;
			}
			const params = {
        'page[limit]': itemsPerPage,
        'page[offset]': offset,
        include: 'genres',
				'filter[genres]': currentCategory.attributes.slug
      };
			const response = await getSearchData('anime',params)
			const newResults = arrayUnique(items.concat(response.data.data))
			this.setState({
        items: newResults,
        paginateItems: {
          ...paginateItems,
					extraData: !paginateItems.extraData,
          offset: offset + itemsPerPage,
					loading: false,
        	loadingMore: false,
        }
      });
		} catch (error) {
			console.log({error});
			this.setState({
        paginateItems: {
          ...paginateItems,
          loading: false,
          loadingMore: false,
        },
      });
		}
	}

	selectCategory = (category:string) => {
		const {paginateItems} = this.state
		this.setState({
			categorySelected: category,
			items:[],
			paginateItems: {
			...paginateItems,
			offset: 0,
		}
	},this.handleGetItems)
	}

  render() {
		const {
			categories,
			items,
			paginateCategories,
			categorySelected,
			paginateItems,
			loading
		} = this.state

    return (
      <Container>
        <FlatList
          stickyHeaderIndices={[1]}
          data={[{}, ...items]}
          onEndReached={this.handleLoadMoreItem}
          onEndReachedThreshold={0.5}
					extraData={paginateItems.extraData}
          maxToRenderPerBatch={5}
					initialNumToRender={5}
          keyExtractor={(item: any, index) => String(item.id)}
          renderItem={({item, index}: {item: any; index: number}) =>
            !Boolean(index) ? (
              <CategoriesList
                categories={categories}
                selected={categorySelected}
                change={this.selectCategory}
              />
            ) : (
              <ItemList
                image={item.attributes.posterImage.small}
                rate={Number(item.attributes.averageRating)}
                title={item.attributes.canonicalTitle}
                subtitle={item.attributes.synopsis}
                onPress={() => this.seeDetail(item)}
                isFavorite={false}
              />
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
}
