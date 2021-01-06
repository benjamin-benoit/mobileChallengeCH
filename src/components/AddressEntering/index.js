import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { FlatList } from "react-native-gesture-handler";
import { fetchTransactions } from '../../api/Ethereum';
import { useSelector, useDispatch } from 'react-redux';

import {getTransactions} from '../../redux/selectors';
import { fetchTransactionsAction } from "../../redux/actions";

const AddressEntering = ({navigation}) => {
    const dispatch = useDispatch();
    const transactions = useSelector(state=>console.log(state));

    useEffect(() =>{
        dispatch(fetchTransactionsAction)
    }, [])
    // useEffect(() => {
    //     fetchTransactions(dispatch)
    // }, [])

    return (
        <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
            <Text>Please enter a valid ethereum address:</Text>
            {transactions && transactions.map((transaction) => {
                return <Text key={transaction.blockNumber}>{transaction.blockHash}</Text>;
            })}
            <Input style={styles.input} placeholder='Enter your ethereum address' />
            <Button style={styles.button} onPress={() => {
                navigation.navigate('transactionDetails')
            }}>
                Lookup
            </Button>
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