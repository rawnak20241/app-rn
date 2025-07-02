import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameModeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty</Text>
      <Button title="Easy" onPress={() => navigation.navigate('Game')} />
      <Button title="Medium" onPress={() => navigation.navigate('Game')} />
      <Button title="Hard" onPress={() => navigation.navigate('Game')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});