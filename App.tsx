/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Navigation from './src/navigation/Navigation';
import {ApolloProvider} from '@apollo/client';
import graphqlClient from './src/api/graphql/apolloClient';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ApolloProvider client={graphqlClient}>
        <Navigation />
      </ApolloProvider>
    </SafeAreaView>
  );
}

export default App;
