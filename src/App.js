/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import {Observer} from 'mobx-react';
import {useUiStore} from './stores';

const App: () => Node = () => {
  const uiStore = useUiStore();
  return (
    <Observer>
      {() => (
        <SafeAreaView>
          <View>
            <Text>{uiStore.colorScheme.type}</Text>
            <Button title="Press me" onPress={() => uiStore.switchDayNight()} />
          </View>
        </SafeAreaView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
