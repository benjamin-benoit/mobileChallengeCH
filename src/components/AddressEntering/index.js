import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { FlatList } from "react-native-gesture-handler";
import axios from 'axios';


import AddressForm from "../AddressForm";

const AddressEntering = ({navigation}) => {

    let transactions;

    const onAddressChange = (data) => {
        transactions = data;
        console.log(transactions)
    };

    return (
        <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
            <Text>Please enter a valid ethereum address:</Text>
            <AddressForm onAddressChange={onAddressChange} />
                <FlatList
                style={styles.flatlist}
                data={transactions}
                keyExtractor={(item, index) => {
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
        </Layout>
    );
};

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#222A45'
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