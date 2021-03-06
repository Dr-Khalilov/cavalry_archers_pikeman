import React, { Component } from 'react';
import { Result } from './Result';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoice: '',
            pcChoice: '',
            roundWinner: '',
            whoWon: '',
            userPoint: 0,
            pcPoint: 0,
            countRounds: 0,
            roundLimit: 20,
        };
    }

    startGame = ({ target: { id: userChoice } }) => {
        const { roundLimit, countRounds, pcPoint, userPoint } = this.state;
        this.setState({ userChoice });
        const pcChoice = ['cavalry', 'archers', 'pikeman'][Math.floor(Math.random() * 3)];
        this.setState({ pcChoice });
        if ((userChoice === 'cavalry' && pcChoice === 'archers') ||
            (userChoice === 'archers' && pcChoice === 'pikeman') ||
            (userChoice === 'pikeman' && pcChoice === 'cavalry')
        ) {
            this.setState(({ userPoint, countRounds }) => ({
                userPoint: userPoint + 1,
                countRounds: countRounds + 1,
                roundWinner: 'User',
            }));
        } else if (userChoice === pcChoice) {
            this.setState(({ countRounds }) => ({
                roundWinner: 'Draw',
                countRounds: countRounds + 1,
            }));
        } else {
            this.setState(({ pcPoint, countRounds }) => ({
                pcPoint: pcPoint + 1,
                countRounds: countRounds + 1,
                roundWinner: 'PC',
            }));
        }
        if (countRounds >= roundLimit && pcPoint < userPoint) {
            this.setState(() => ({
                whoWon: 'User won!',
            }));
        } else if (countRounds >= roundLimit && pcPoint > userPoint) {
            this.setState(() => ({
                whoWon: 'PC won!',
            }));
        } else if (countRounds >= roundLimit && pcPoint === userPoint) {
            this.setState(() => ({
                whoWon: 'Draw!',
            }));
        }
    };

    resetGame = () => this.setState({
        userChoice: '',
        pcChoice: '',
        roundWinner: '',
        whoWon: '',
        userPoint: 0,
        pcPoint: 0,
        countRounds: 0,
    });

    render() {
        const { userChoice, pcChoice, roundWinner, userPoint, pcPoint, countRounds, whoWon } = this.state;
        return (
            <>
                <Result userChoice={userChoice} pcPoint={pcPoint} roundWinner={roundWinner} pcChoice={pcChoice}
                        userPoint={userPoint} countRounds={countRounds} whoWon={whoWon} />
                <button onClick={this.startGame} id='cavalry'>Cavalry</button>
                &nbsp;
                <button onClick={this.startGame} id='archers'>Archers</button>
                &nbsp;
                <button onClick={this.startGame} id='pikeman'>Pikeman</button>
                &nbsp;
                <button onClick={this.resetGame}>Reset Game</button>
            </>
        );
    }
}