import {API_GET_CASHBOOK} from "./configs"
import axios from "axios"

class GetLishCashBook {
    getLishCashBookDetail = async (data) =>{
      const  token = localStorage.getItem('TOKEN');
        try {
            const response = await axios.get(`${API_GET_CASHBOOK}?business_id=${data.business_id}&token=${data.token}&start_time=${data.start_time}&end_time=${data.end_time}&transaction_type=${data.transaction_type}&page=${data.page}&page_size=${data.page_size}&sort=${data.sort}&search=${data.search}&status=${data.status}`,
            { headers: { authorization: `Bearer ${token}`} });
            return response;
          } catch (error) {
            return error?.response?.data || error;
          }
    }
}

const getLishCashBook = new GetLishCashBook();
export default getLishCashBook