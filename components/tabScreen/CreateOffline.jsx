import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OfflineForm = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>오프라인 폼 화면입니다.</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default OfflineForm;