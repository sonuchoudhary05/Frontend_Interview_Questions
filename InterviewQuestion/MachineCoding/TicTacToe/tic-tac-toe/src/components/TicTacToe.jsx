import React from 'react'
import useTicTacToe from '../hooks/use-tic-tac-toe';

const TicTacToe = () => {
    const {board, isXNext, handleClick, getMessageStatus, handleReset,calculateWinner} = useTicTacToe();
   return (
     <div className='game'>
      <div className='status'>
      <span>{getMessageStatus()}</span>
       <button onClick={handleReset}>Reset</button>
      </div>
      <div className='board'>
       {board.map((b, index) => (
         <button className='cell' key={index} onClick={() => handleClick(index)} disabled = {b !== null}>{board[index]}</button>
       ))}
      </div>
     </div>
   );
}

export default TicTacToe
