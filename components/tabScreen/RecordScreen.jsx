import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';
function RecordScreen() {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Record Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default RecordScreen;