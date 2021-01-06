import { FETCH_TRANSACTIONS } from '../actionTypes'
const defaultState = [];

export const transactionList = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_TRANSACTIONS:
            return action.payload.data;
        default:
            return state;
    }
}