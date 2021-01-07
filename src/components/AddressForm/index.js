import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Layout } from '@ui-kitten/components';
import axios from 'axios';

const TaskFrom = ({ onAddressChange }) => {

    let addr;
    const [url, setUrl] = useState("");
    const [data, setData] = useState([]);

    const _onChangeText = value => {
        addr = value;
    };

    const _onPressBtn = () => {
        setUrl('https://api.etherscan.io/api?module=account&action=txlist&startblock=0&endblock=99999999&sort=asc&apikey=3C3TV9PS1H3GH31ZW115CKCN95U2PGZGMU&address=' + addr)
    };

    useEffect(() => {
        console.log("useeffect");
        axios.get(url)
        .then(({ data }) => {
            setData(data.result)
            onAddressChange(data);
        })
        .catch((error) => console.error(error))
    }, [url]);

    return (
        <Layout style={styles.container}>
            <Input style={styles.input} placeholder='Enter your ethereum address' onChangeText={_onChangeText}/>
            <Button style={styles.button} onPress={_onPressBtn}>
                Lookup
            </Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: "100%",
  },
  button: {
      marginTop: 10,
      padding: 30
  }
});

export default TaskFrom;
