/*
import { ACTION_TYPES } from '../actions/types';

const initialState = {
    userChoice: '',
    pcChoice: '',
    roundWinner: '',
    whoWon: '',
    userPoint: 0,
    pcPoint: 0,
    countRounds: 0,
    roundLimit: 20,
};

export const gameReducer = (state = initialState, action) => {
    const { userChoice, pcChoice } = action.payload.choices;
    switch (action.type) {
        case ACTION_TYPES.START_GAME:
            if ((userChoice === 'cavalry' && pcChoice === 'archers') ||
                (userChoice === 'archers' && pcChoice === 'pikeman') ||
                (userChoice === 'pikeman' && pcChoice === 'cavalry')) {
                return {
                    ...state,
                    userChoice: userChoice, pcChoice: pcChoice,
                    userPoint: +1,
                    countRounds: +1,
                    roundWinner: 'User',
                };
            } else if (userChoice === pcChoice) {
                return {
                    ...state,
                    roundWinner: 'Draw',
                    countRounds: +1,
                };
            } else {
                return {
                    ...state,
                    pcPoint: +1,
                    countRounds: +1,
                    roundWinner: 'PC',
                };
            }


        default:
            return state;
    }
};
*/
