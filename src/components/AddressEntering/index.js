import React, { useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
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
        <Layout>
          <ScrollView>
          <View style={styles.listHeader}>
              <Text>Please enter a valid ethereum address:</Text>
              <Input style={styles.input} placeholder='Enter your ethereum address' />
              <Button style={styles.button} onPress={() => {
                  navigation.navigate('transactionDetails')
              }}>
                  Lookup
              </Button>
              <Text style={styles.topList}>100 MOST RECENT TRANSACTIONS</Text>
          </View>
              {transactions && transactions.slice(0,100).map((transaction, i) => {
                  return <TouchableOpacity key={i} style={styles.itemElement}>
                    <Text style={styles.itemValue}>
                      {transaction.value} ETH
                    </Text>
                    <Text style={styles.itemTo}>
                      to: {transaction.to}
                    </Text>
                  </TouchableOpacity>
              })}
          </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
  listHeader: {
    paddingTop: 20,
    alignItems: 'center'
  },
  topList: {
    fontSize: 16,
    margin: 15,
    textAlign: "center"
  },
  input: {
    margin: 10
  },
  itemElement: {
    padding: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  itemValue: {
    fontWeight: 'bold'
  },
  itemTo: {
    fontSize: 11
  },
  button: {
    width: '50%'
  }
});

export default AddressEntering;