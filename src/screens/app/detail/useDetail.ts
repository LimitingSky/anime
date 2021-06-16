import {useNavigation, useRoute} from '@react-navigation/core';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Linking, Platform, Share} from 'react-native';

export interface ItemBase {
  id: string;
  isFavorite: boolean;
  type: string;
  attributes: {
    slug: string;
    synopsis: string;
    canonicalTitle: string;
    averageRating: number | null;
    popularityRank: number;
    posterImage: {
      [x: string]: string;
    };
    episodeCount?: number;
    episodeLength?: number | null;
    chapterCount?: number;
    volumeCount?: number | null;
    youtubeVideoId: string;
  };
}

export const useDetail = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState<ItemBase>(<ItemBase>params);

  const goBack = () => navigation.goBack();

  const handleShare = async () => {
    try {
      const linkKitsu = `https://kitsu.io/${data.type}/${data.attributes.slug}`;
      let message = `Hello, I found that incredible ${data.type} called "${data.attributes.canonicalTitle}", I hope and enjoy it more than me! \nYou can also see it in the following link ${linkKitsu}`;
      const result = await Share.share({
        message,
      });
    } catch (error) {
      console.log({error});
    }
  };

  const openYTVideo = async () => {
    const url =
      'https://www.youtube.com/watch?v=' + data.attributes.youtubeVideoId;
    try {
      const scheme =
        (Platform.OS === 'ios'
          ? 'youtube://watch?v='
          : 'vnd.youtube://watch?v=') + data.attributes.youtubeVideoId;
      const supported = await Linking.canOpenURL(scheme);
      if (supported) {
        Linking.openURL(scheme);
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      Linking.openURL(url);
    }
  };

  return {
    data,
    back: goBack,
    share: handleShare,
    openYTVideo,
  };
};
