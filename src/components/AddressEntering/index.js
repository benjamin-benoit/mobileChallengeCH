import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { fetchTransactions } from '../../api/Ethereum';
import { useSelector, useDispatch } from 'react-redux';

import {getTransactions} from '../../redux/selectors';

const AddressEntering = ({navigation}) => {
    const dispatch = useDispatch();
    const transactions = useSelector(getTransactions);

    useEffect(() => {
        fetchTransactions(dispatch)
    }, [])

    return (
        <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
          <ScrollView>
              <Text>Please enter a valid ethereum address:</Text>
              <Input style={styles.input} placeholder='Enter your ethereum address' />
              <Button style={styles.button} onPress={() => {
                  navigation.navigate('transactionDetails')
              }}>
                  Lookup
              </Button>
              {transactions && transactions.map((transaction, i) => {
                  return <Text key={i}>{transaction.blockHash}</Text>;
              })}
          </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
  button: {
    margin: 2,
  },
});

export default AddressEntering;