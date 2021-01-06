import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, TouchableOpacity, View } from 'react-native';
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
                style={{width: '100%'}}
                data={data}
                keyExtractor={(item, index) => {
                    // console.log("index", index)
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    console.log("item", item)
                    return (
                    <TouchableOpacity>
                        <View style={styles.itemView}>
                            <Text style={styles.valueItem}>{item.value} ETH</Text>
                            <Text style={styles.toItem}>To: {item.to}</Text>
                        </View>
                    </TouchableOpacity>
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
  itemView: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  valueItem: {
    fontWeight: 'bold'
  },
  toItem: {
    fontSize: 'bold',
    fontSize: 11,
  }
});

export default AddressEntering;