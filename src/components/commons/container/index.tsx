import React from 'react';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface IContainer {
  children: ReactNode;
}

export default function Container(props: IContainer) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </View>
  );
}
