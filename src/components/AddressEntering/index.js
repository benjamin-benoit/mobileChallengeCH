import React from "react";
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

const AddressEntering = () => (
  <Layout style={{flex: 1, paddingTop: 20, alignItems: 'center'}}>
    <Text>Please enter a valid ethereum address:</Text>
    <Input style={styles.input} placeholder='Enter your ethereum address' />
    <Button style={styles.button} >
        Lookup
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
  button: {
    margin: 2,
  },
});

export default AddressEntering;