import { useState } from 'react';

const useTicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const WINING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const calculateWinner = (currentBoard) => {
        for (let i=0; i < WINING_COMBINATIONS.length; i++){
            let [a, b, c] = WINING_COMBINATIONS[i];
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;
    };
    const handleClick = (index) => {
        const winner = calculateWinner(board)
        if(winner || board[index]) return;
        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };
    const getMessageStatus = () => {
        const winner = calculateWinner(board);
        if(winner){
            return `Winner is ${winner}`;
        }
        if(!board.includes(null)){
            return 'Game is Draw';
        }
        return `Next Player is ${isXNext ? 'X' : 'O'} Turn`;
    };
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };
    return { board, isXNext, handleClick, getMessageStatus, handleReset,calculateWinner };
}
export default useTicTacToe;