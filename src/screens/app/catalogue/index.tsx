import React from 'react';
import {View, FlatList,ActivityIndicator} from 'react-native';
import {CustomText} from 'components/commons/text';
import {CatalogueCard} from 'components/catalogue/card';
import Container from 'components/commons/container';
import {BLUE_50, BLUE_900} from 'assets/colors';
import {ModeButton} from 'components/catalogue/button';
import {ItemList} from 'components/catalogue/itemList';
import {CategoriesList,Category,} from 'components/catalogue/categoriesHorizontalList';
import seeFavorites from 'assets/images/icons/seeAllFavorites.jpg'
import styles from './styles';
import {DETAIL_VIEW, FAVORITE_VIEW} from 'router/types';
import {fetchGenders} from 'api/genders';
import {arrayUnique} from 'utils/parse';
import { getSearchData } from 'api/search';
import { connect } from 'react-redux';
import { ItemBase } from '../detail/useDetail';
import { addFavoriteAnime } from 'store/reducers/favorites/actions';

interface props {
  loading: boolean;
  favoritesRefresh: boolean;
  paginateCategories: {
    offset: number;
    itemsPerPage: number;
    loading: boolean;
    loadingMore: boolean;
  };
  categories: Category[];
	categorySelected: string,
  items: ItemBase[];
  paginateItems: {
		extraData:boolean,
    offset: number;
    itemsPerPage: number;
    loading: boolean;
    loadingMore: boolean;
  };
}

const allFavoriteCard = {
	id: "Favorite",
	image: seeFavorites,
	title: "See all",
}
class CatalogueView extends React.Component {
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
		favoritesRefresh: true,
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

  seeDetail = (item: ItemBase) => {
		let screen = DETAIL_VIEW 
		let params:ItemBase|null = item
		if(Object.entries(item.attributes||{}).length==0){
			screen = FAVORITE_VIEW
			params = null
		}
		this.props.navigation.navigate(screen,params)
	};

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
		const {favorites} = this.props
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
			const results = response.data.data.map((result:ItemBase)=>({...result,isFavorite: favorites.anime.find((favorite:ItemBase)=>favorite.id===result.id)}))
			const newResults = arrayUnique(items.concat(results))
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

	handleAddToFavorites = (item:ItemBase,index:number) => {
		try {
			const {items,favoritesRefresh} = this.state
			items[index].isFavorite = !items[index].isFavorite
			const {favorites,dispatch} = this.props;
			let newFavorites = [...favorites.anime];
			const existOnFavorites = newFavorites.findIndex((favorite:ItemBase)=>favorite.id===item.id)
			if(existOnFavorites>=0){
				newFavorites.splice(existOnFavorites,1)
			} else {
				newFavorites.unshift(item);
			}
			console.log({existOnFavorites,newFavorites})
			dispatch(addFavoriteAnime(JSON.stringify(newFavorites)));
			this.setState({items,favoritesRefresh:!favoritesRefresh})
		} catch (error) {
			console.log({error})
		}
	}

  render() {
		const {
			categories,
			items,
			paginateCategories,
			categorySelected,
			paginateItems,
			loading,
			favoritesRefresh
		} = this.state

		const {favorites}=this.props

		console.log(favorites)

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
								onPressFavorite={() => this.handleAddToFavorites(item,index-1)}
                isFavorite={item.isFavorite}
              />)}
          ListHeaderComponent={
            <>
              <View style={[styles.headerContainer,favorites.anime.length!==0&&styles.headerContainerShadows]}>
                <CustomText style={styles.title}>
                  Choose the mode you love
                </CustomText>
                <View style={styles.modesContainer}>
                  <ModeButton title="anime" colors={[BLUE_50, BLUE_900]} />
                  <ModeButton title="manga" />
                </View>
              </View>
              <FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={[...favorites.anime.slice(0,3),allFavoriteCard]}
								extraData={favoritesRefresh}
								renderItem={({item})=>{
									let restProps = {}
									if(Object.entries(item.attributes||{}).length!==0){
										restProps = {
											image:item.attributes.posterImage.small,
											title:item.attributes.canonicalTitle
										}
									} else {
										restProps = item
									}
									return(
										<CatalogueCard
											onPress={() => this.seeDetail(item)}
											{...restProps}
										/>
									)
								}}
								keyExtractor={(item,index)=>String(item.id)}
							/>
            </>
          }
					ListFooterComponent={
						<>
						{paginateItems.loadingMore&&<ActivityIndicator />}
						</>
					}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({favorites}:{favorites:{[x:string]:string}})=>(
	{favorites:{
		manga:JSON.parse(favorites.manga),
		anime:JSON.parse(favorites.anime),
	}}
)

export default connect(mapStateToProps)(CatalogueView)