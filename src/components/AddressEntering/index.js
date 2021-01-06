import React, { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { FlatList } from "react-native-gesture-handler";
import { fetchTransactions } from '../../api/Ethereum'

const AddressEntering = ({navigation}) => {
    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
            <Text>Please enter a valid ethereum address:</Text>
            <Input style={styles.input} placeholder='Enter your ethereum address' />
            <Button style={styles.button} onPress={() => {
                navigation.navigate('transactionDetails')
            }}>
                Lookup
            </Button>
            <FlatList>

            </FlatList>
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