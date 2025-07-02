import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function GameScreen({ navigation }) {
  const initialBoard = Array(3).fill(null).map(() => Array(3).fill(""));
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState("X");

  const checkWinner = (board) => {
    const lines = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];
    for (const line of lines) {
      if (line[0] && line[0] === line[1] && line[1] === line[2]) {
        return line[0];
      }
    }
    return null;
  };

  const handlePress = (row, col) => {
    if (board[row][col] !== "") return;

    const updatedBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? player : cell))
    );

    const winner = checkWinner(updatedBoard);
    if (winner) {
      Alert.alert(`🎉 ${winner} wins!`);
      navigation.navigate('Victory');
    } else {
      setBoard(updatedBoard);
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player: {player}</Text>
      {board.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((cell, j) => (
            <TouchableOpacity
              key={j}
              style={styles.cell}
              onPress={() => handlePress(i, j)}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    color: '#fff',
    fontSize: 36,
  },
});