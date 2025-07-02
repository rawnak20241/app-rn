import { useState } from 'react';

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== '' || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner ? `🎉 Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div style={styles.container}>
      <h1>Tic Tac Toe - Next.js</h1>
      <div style={styles.board}>
        {board.map((cell, index) => (
          <div key={index} onClick={() => handleClick(index)} style={styles.cell}>
            {cell}
          </div>
        ))}
      </div>
      <h2>{status}</h2>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '5px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  cell: {
    width: '100px',
    height: '100px',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2em',
    cursor: 'pointer',
  }
};