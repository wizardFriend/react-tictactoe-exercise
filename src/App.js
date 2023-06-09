import './App.css';
import { useState } from 'react';
import Board1 from './Components/Board1';

const App = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
  const [XIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)
  // move로 받아와서 하면 되는데 굳이 state를 만든 이유가 뭘까?
  // -> 내가 처음에 생각한 이유가 맞았다. 기록을 남기기 위해서는 state변수로 빼면 될거라고 생각했는데.
  // 그것이 정답이었다.

  const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i]
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
          }
        }
        return null;
  }
  let current = history[stepNumber] // history[history.length - 1].squares
  const winner = calculateWinner(current.squares)
  let status;
  if (winner) {
        status = `Winner: ${winner}`
  } else {
        status = `Next Player: ${XIsNext ? 'X' : 'O'}`
  }
 
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const newCurrent = newHistory[newHistory.length - 1]
    const newSquares = newCurrent.squares.slice()

    if (calculateWinner(newSquares) || newSquares[i]) {
      return
    }
    newSquares[i] = XIsNext ? 'X' : 'O'
    // console.log(newSquares[i])
    setHistory([...newHistory, { squares: newSquares }])
    setXIsNext(prev => !prev)
    setStepNumber(newHistory.length)
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go To Move #${move}` : `Go To Game Start`
    return (
      <li key={crypto.randomUUID()}>
        <button className='move-button' onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })
  const jumpTo = (step) => {
    // const newHistory = history.slice(0, move + 1)
    // setHistory(newHistory)
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className='game-board'>
        <Board1 squares={current.squares} onClick={(i) => handleClick(i) } />
      </div>
      <div className='game-info'>
        <div className='status'>{status}</div>
        <ol>{moves}</ol>
      </div>
  
    </div>
  );
}

export default App;
