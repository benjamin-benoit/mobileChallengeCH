import { GET_TRANSACTIONS } from '../actionTypes';
const defaultState = [];

export const transactionsList = (state = defaultState, action) => {
    switch(action.type) {
        case GET_TRANSACTIONS:
            return action.payload.data;
        default:
            return state;
    }
}