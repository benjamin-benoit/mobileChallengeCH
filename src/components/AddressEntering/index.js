import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { FlatList } from "react-native-gesture-handler";
import axios from 'axios';

const AddressEntering = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.etherscan.io/api?module=account&action=txlist&startblock=0&endblock=99999999&sort=asc&apikey=3C3TV9PS1H3GH31ZW115CKCN95U2PGZGMU&address=0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91')
        .then(({ data }) => {
            console.log("defaultApp -> data", data.result)
            setData(data.result)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
            <Text>Please enter a valid ethereum address:</Text>
            {/* {transactions && transactions.map((transaction) => {
                return <Text key={transaction.blockNumber}>{transaction.blockHash}</Text>;
            })} */}
            <Input style={styles.input} placeholder='Enter your ethereum address' />
            <Button style={styles.button} onPress={() => {
                navigation.navigate('transactionDetails')
            }}>
                Lookup
            </Button>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                data={data}
                keyExtractor={(item, index) => {
                    // console.log("index", index)
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    console.log("item", item)
                    return (
                    <>
                        <Text>{item.value}</Text>
                        <Text>{item.to}</Text>
                    </>
                    )
                }}
                />
            )}
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