import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import AddressEntering from "./src/components/AddressEntering";
import QRScanner from "./src/components/QRScanner";
import TransactionList from "./src/components/TransactionList";
import TransactionDetails from "./src/components/TransactionDetails";

const Stack = createStackNavigator()

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="addressEntering" component={AddressEntering} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="transactionList" component={TransactionList} />
        <Stack.Screen name="transactionDetails" component={TransactionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
