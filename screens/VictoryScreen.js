import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function VictoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 You Win!</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 32,
    color: '#0f0',
    marginBottom: 20,
  },
});