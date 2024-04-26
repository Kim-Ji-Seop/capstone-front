import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';

function InfoScreen() {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default InfoScreen;