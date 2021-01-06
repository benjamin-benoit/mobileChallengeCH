import axios from 'axios';

import {fetchTransactionsAction} from '../../redux/actions'

const url = "https://api.etherscan.io/api?module=account&action=txlist&startblock=0&endblock=99999999&sort=asc&apikey=3C3TV9PS1H3GH31ZW115CKCN95U2PGZGMU&address=0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91";
const apikey = "3C3TV9PS1H3GH31ZW115CKCN95U2PGZGMU";

export const fetchTransactions = async (dispatch, ethereumAddr) => {
    try {
        console.log('fetch transaction in')
        const response = await axios.get(url, {
            params: {
                apikey,
            }
        })

        console.log('La rep ', response.data.result);

        dispatch(fetchTransactionsAction(response.data.result));
    } catch (err) {
        console.log(err)
    }
}