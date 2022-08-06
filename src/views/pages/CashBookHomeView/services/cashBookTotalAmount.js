import { API_CASHBOOK_TOTAL_AMOUNT } from './configs';
import axios from 'axios';

class GetCashBookTotalAmount {
  getCashBookTotalAmountDetail = async (data) => {
    const token = localStorage.getItem('TOKEN');
    try {
      const response = await axios.get(
        `${API_CASHBOOK_TOTAL_AMOUNT}?business_id=${data.business_id}&token=${data.token}&start_time=${data.start_time}&end_time=${data.end_time}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return error?.response?.data || error;
    }
  };
}

const cashBookTotalAmount = new GetCashBookTotalAmount();
export default cashBookTotalAmount;
