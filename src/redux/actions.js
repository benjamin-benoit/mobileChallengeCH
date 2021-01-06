import { FETCH_TRANSACTIONS } from "./actionTypes";

export const fetchTransactionsAction = (data) => ({
    type: FETCH_TRANSACTIONS,
    payload: {
        data,
    },
});