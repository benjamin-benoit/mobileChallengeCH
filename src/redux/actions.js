import { GET_TRANSACTIONS } from "./actionTypes";

export const fetchTransactionsAction = (data) => ({
    type: GET_TRANSACTIONS,
    payload: {
        data,
    },
});