import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import store from './src/redux/store';

import AddressEntering from "./src/components/AddressEntering";
import QRScanner from "./src/components/QRScanner";
import TransactionList from "./src/components/TransactionList";
import TransactionDetails from "./src/components/TransactionDetails";
import { Provider } from 'react-redux';

const Stack = createStackNavigator()

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
