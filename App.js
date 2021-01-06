import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import AddressEntering from "./src/components/AddressEntering";
import QRScanner from "./src/components/QRScanner";
import TransactionList from "./src/components/TransactionList";
import TransactionDetails from "./src/components/TransactionDetails";
import { darkblue } from 'color-name';

const Stack = createStackNavigator()

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Coinhouse Ethersan" component={AddressEntering} />
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
const MyTheme = {
  ...DarkTheme,
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 20,
//   },
// });
