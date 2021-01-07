import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';

import AddressEntering from "./src/components/AddressEntering";
import QRScanner from "./src/components/QRScanner";
import TransactionList from "./src/components/TransactionList";
import TransactionDetails from "./src/components/TransactionDetails";

const Stack = createStackNavigator()
import store from './src/redux/store';

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Coinhouse Ethersan" component={AddressEntering} />
          <Stack.Screen name="QRScanner" component={QRScanner} />
          <Stack.Screen name="Lookup" component={TransactionList} />
          <Stack.Screen name="transactionDetails" component={TransactionDetails} options={{ title: 'Coinhouse Ethersan' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </ApplicationProvider>
);

const MyTheme = {
  ...DarkTheme,
};