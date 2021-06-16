import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
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
import seeFavorites from 'assets/images/icons/seeAllFavorites.jpg';
import styles from './styles';
import {DETAIL_VIEW, FAVORITE_VIEW} from 'router/types';
import {fetchGenders} from 'api/genders';
import {arrayUnique, getOffsetLimit} from 'utils/parse';
import {getSearchData, searchByQuery} from 'api/search';
import {connect} from 'react-redux';
import {ItemBase} from '../detail/useDetail';
import {
  addFavoriteAnime,
  addFavoriteManga,
} from 'store/reducers/favorites/actions';
import {HISTORY_TYPE} from 'assets/const';
import { SearchBar } from 'components/commons/searchbar';

export interface IDispatchActions {
  [x: string]: (items: string) => {type: string; payload: string};
}

interface IPaginateInformation {
	extraData: boolean;
	offset: number;
	offsetLimit: number;
	itemsPerPage: number;
	loading: boolean;
	loadingMore: boolean;
}

interface props {
  loading: boolean;
  favoritesRefresh: boolean;
  mode: string;
  categorySelected: string;
  query: string;
  categories: Category[];
  items: ItemBase[];
  paginateCategories: IPaginateInformation;
  paginateItems: IPaginateInformation;
}

const allFavoriteCard = {
  id: 'Favorite',
  image: seeFavorites,
  title: 'See all favorites',
};
class CatalogueView extends React.Component {
  state: props = {
    loading: true,
    mode: HISTORY_TYPE.ANIME,
    favoritesRefresh: true,
    categorySelected: '',
    query: '',
    categories: [],
    items: [],
    paginateCategories: {
      extraData: false,
      offset: 0,
      itemsPerPage: 10,
      loading: true,
      loadingMore: true,
			offsetLimit:10,
    },
    paginateItems: {
			extraData: false,
      offset: 0,
      itemsPerPage: 5,
      loading: true,
      loadingMore: true,
			offsetLimit:10,
    },
  };

  componentDidMount() {
    this.handleGetCategories();
  }

  seeDetail = (item: ItemBase) => {
    let screen = DETAIL_VIEW;
    let params: ItemBase | null = item;
    if (Object.entries(item.attributes || {}).length == 0) {
      screen = FAVORITE_VIEW;
      params = null;
    }
    this.props.navigation.navigate(screen, params);
  };

  handleLoadMoreItem = () => {
    const {paginateItems,query} = this.state;
    if (!paginateItems.loadingMore&&paginateItems.offset<=paginateItems.offsetLimit) {
      this.setState(
        {
          paginateItems: {
            ...paginateItems,
            loadingMore: true,
          },
        },
        Boolean(query)?this.handleSearchByQuery:this.handleGetItems,
      );
    }
  };

  handleLoadMoreCategories = () => {
    const {paginateCategories} = this.state;
    if (!paginateCategories.loadingMore&&paginateCategories.offset<=paginateCategories.offsetLimit) {
      this.setState(
        {
          paginateCategories: {
            ...paginateCategories,
            loadingMore: true,
          },
        },
        ()=>this.handleGetCategories(false),
      );
    }
  };

  handleGetCategories = async (fetchItems=true) => {
    const {paginateCategories, categories,categorySelected} = this.state;
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
			let offsetLimit = paginateCategories.offsetLimit;
			if (response.data.links.last) {
        offsetLimit = getOffsetLimit(response.data.links.last);
      }
      const newGenders: Category[] = arrayUnique(
        categories.concat(response.data.data),
      );
      this.setState(
        {
          categories: newGenders,
          paginateCategories: {
            ...paginateCategories,
            offset: offset + itemsPerPage,
						loading: false,
          	loadingMore: false,
						offsetLimit
          },
          categorySelected: Boolean(categorySelected)?categorySelected:newGenders[0].id,
        },
        fetchItems?this.handleGetItems:()=>{},
      );
    } catch (error) {
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
    const {paginateItems, items, categories, categorySelected, mode} =
      this.state;
    const {favorites} = this.props;
    const {offset, itemsPerPage} = paginateItems;
		const favoritesItems:string[] = favorites[mode].map((favorite:ItemBase)=>favorite.id)
    try {
      const currentCategory = categories.find(
        ({id}) => id == Number(categorySelected),
      );
      if (!Boolean(currentCategory)) {
        return;
      }
      const params = {
        'page[limit]': itemsPerPage,
        'page[offset]': offset,
        include: 'genres',
        'filter[genres]': currentCategory.attributes.slug,
      };
      const response = await getSearchData(mode, params);
			let offsetLimit = paginateItems.offsetLimit;
			if (response.data.links.last) {
        offsetLimit = getOffsetLimit(response.data.links.last);
      }
      const results = response.data.data.map((result: ItemBase) => ({
        ...result,
        isFavorite: favoritesItems.includes(result.id),
      }));
      const newResults = arrayUnique(items.concat(results));
      this.setState({
        items: newResults,
        paginateItems: {
          ...paginateItems,
          extraData: !paginateItems.extraData,
          offset: offset + itemsPerPage,
          loading: false,
          loadingMore: false,
					offsetLimit
        },
        loading: false,
      });
    } catch (error) {
      this.setState({
        paginateItems: {
          ...paginateItems,
          loading: false,
          loadingMore: false,
        },
        loading: false,
      });
    }
  };

  selectCategory = (category: string) => {
    const {paginateItems} = this.state;
    this.setState(
      {
        categorySelected: category,
        items: [],
        paginateItems: {
          ...paginateItems,
          offset: 0,
        },
      },
      this.handleGetItems,
    );
  };

  handleAddToFavorites = (item: ItemBase, index: number) => {
    try {
      const dispatchActions: IDispatchActions = {
        [HISTORY_TYPE.ANIME]: addFavoriteAnime,
        [HISTORY_TYPE.MANGA]: addFavoriteManga,
      };
      const {items, favoritesRefresh, mode} = this.state;
			console.log({items,item,index})
      items[index].isFavorite = !items[index].isFavorite;
      const {favorites, dispatch} = this.props;
      let newFavorites = [...favorites[mode]];
      const existOnFavorites = newFavorites.findIndex(
        (favorite: ItemBase) => favorite.id === item.id,
      );
      if (existOnFavorites >= 0) {
        newFavorites.splice(existOnFavorites, 1);
      } else {
        newFavorites.unshift(item);
      }
      console.log({existOnFavorites, newFavorites});
      dispatch(dispatchActions[mode](JSON.stringify(newFavorites)));
      this.setState({items, favoritesRefresh: !favoritesRefresh});
    } catch (error) {
      console.log({error});
    }
  };

  handleChangeMode = (mode: string) =>
    this.setState(
      {
        mode,
        loading: true,
        categorySelected: '',
        categories: [],
        items: [],
        paginateCategories: {
          offset: 0,
          itemsPerPage: 10,
          loading: true,
          loadingMore: true,
					offsetLimit:10
        },
        paginateItems: {
          extraData: false,
          offset: 0,
          itemsPerPage: 5,
          loading: true,
          loadingMore: true,
					offsetLimit:10
        },
      },
      this.handleGetCategories,
    );

	handleSearch = (query:string) => this.setState({
		query,
		paginateItems: {
			extraData: false,
			offset: 0,
			itemsPerPage: 5,
			loading: true,
			loadingMore: true,
		},
		items: []
	},Boolean(query)?this.handleSearchByQuery:this.handleGetItems);

	handleSearchByQuery = async() => {
		const {paginateItems, items, categories, categorySelected, mode,query} =
      this.state;
    const {favorites} = this.props;
    const {offset, itemsPerPage} = paginateItems;
		const favoritesItems:string[] = favorites[mode].map((favorite:ItemBase)=>favorite.id)
    try {
      const currentCategory = categories.find(
        ({id}) => id == Number(categorySelected),
      );
      if (!Boolean(currentCategory)) {
        return;
      }
      const params = {
				'filter[text]': query,
        'page[limit]': itemsPerPage,
        'page[offset]': offset,
      };
      const response = await searchByQuery(mode, params);
			let offsetLimit = paginateItems.offsetLimit;
			if (response.data.links.last) {
        offsetLimit = getOffsetLimit(response.data.links.last);
      }
      const results = response.data.data.map((result: ItemBase) => ({
        ...result,
        isFavorite: favoritesItems.includes(result.id),
      }));
      const newResults = arrayUnique(items.concat(results));
      this.setState({
        items: newResults,
        paginateItems: {
          ...paginateItems,
          extraData: !paginateItems.extraData,
          offset: offset + itemsPerPage,
          loading: false,
          loadingMore: false,
					offsetLimit
        },
        loading: false,
      });
    } catch (error) {
      console.log({error});
      this.setState({
        paginateItems: {
          ...paginateItems,
          loading: false,
          loadingMore: false,
        },
        loading: false,
      });
    }
	}

  render() {
    const {
      categories,
      paginateCategories,
      categorySelected,
      paginateItems,
      loading,
      favoritesRefresh,
      mode,
			query,
			items
    } = this.state;

    const {favorites} = this.props;

    return (
      <Container>
        <FlatList
          stickyHeaderIndices={[Boolean(query)?0:1]}
          data={[...(Boolean(query)?[]:[{}]), ...items]}
          onEndReached={this.handleLoadMoreItem}
          onEndReachedThreshold={0.5}
          extraData={paginateItems.extraData}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          keyExtractor={(item: any, index) => String(item.id)}
          renderItem={({item, index}: {item: any; index: number}) =>
            Object.entries(item).length === 0 ? (
              <CategoriesList
                categories={categories}
                selected={categorySelected}
                change={this.selectCategory}
								loadMore={this.handleLoadMoreCategories}
								loading={paginateCategories.loadingMore}
              />
            ) : (
              <ItemList
                image={item.attributes.posterImage.small}
                rate={Number(item.attributes.averageRating)}
                title={item.attributes.canonicalTitle}
                subtitle={item.attributes.synopsis}
                onPress={() => this.seeDetail(item)}
                onPressFavorite={() =>
                  this.handleAddToFavorites(item, index - (Boolean(query)?0:1))
                }
                isFavorite={item.isFavorite}
              />
            )
          }
          ListHeaderComponent={
            <>
							<View style={[
								styles.container,
								favorites[mode].length !== 0 && !Boolean(query) && styles.headerContainerShadows
							]}>
								<View
									style={[
										styles.headerContainer
									]}>
									<CustomText style={styles.title}>
										Choose the mode you love
									</CustomText>
									<View style={styles.modesContainer}>
										<ModeButton
											onPress={() => this.handleChangeMode(HISTORY_TYPE.ANIME)}
											title={HISTORY_TYPE.ANIME}
											colors={[BLUE_50, BLUE_900]}
											selected={HISTORY_TYPE.ANIME === mode}
										/>
										<ModeButton
											onPress={() => this.handleChangeMode(HISTORY_TYPE.MANGA)}
											title={HISTORY_TYPE.MANGA}
											selected={HISTORY_TYPE.MANGA === mode}
										/>
									</View>
								</View>
								<SearchBar
									onChangeText={this.handleSearch}
									value={query}
									placeholder={"Search"}
								/>
							</View>
              {!Boolean(query)&&<FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[...favorites[mode].slice(0, 3), allFavoriteCard]}
                extraData={favoritesRefresh}
                renderItem={({item}) => {
                  let restProps = {};
                  if (Object.entries(item.attributes || {}).length !== 0) {
                    restProps = {
                      image: item.attributes.posterImage.small,
                      title: item.attributes.canonicalTitle,
                    };
                  } else {
                    restProps = item;
                  }
                  return (
                    <CatalogueCard
                      onPress={() => this.seeDetail(item)}
                      {...restProps}
                    />
                  );
                }}
                keyExtractor={(item, index) => String(item.id)}
              />}
            </>
          }
          ListFooterComponent={
            <>{paginateItems.loadingMore && <ActivityIndicator />}</>
          }
        />
      </Container>
    );
  }
}

const mapStateToProps = ({favorites}: {favorites: {[x: string]: string}}) => ({
  favorites: {
    manga: JSON.parse(favorites.manga),
    anime: JSON.parse(favorites.anime),
  },
});

export default connect(mapStateToProps)(CatalogueView);
