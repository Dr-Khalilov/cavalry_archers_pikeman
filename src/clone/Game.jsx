/*
import React from 'react';
import { useDispatch } from 'react-redux';
import * as ActionCreators from './redux/actions';

function Game() {
    const dispatch = useDispatch();
    const startGame = ({ target: { id: userChoice } }) => {
        const pcChoice = ['cavalry', 'archers', 'pikeman'][Math.floor(Math.random() * 3)];
        dispatch(ActionCreators.startGame({ userChoice, pcChoice }));
    };

    const resetGame = () => {
    };
    return (
        <>
            <button onClick={startGame} id='cavalry'>Cavalry</button>
            &nbsp;
            <button onClick={startGame} id='archers'>Archers</button>
            &nbsp;
            <button onClick={startGame} id='pikeman'>Pikeman</button>
            &nbsp;
            <button onClick={resetGame}>Reset Game</button>
        </>
    );
}

export default Game;*/
