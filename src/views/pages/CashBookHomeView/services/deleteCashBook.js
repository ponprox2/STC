import {API_DELETE_CASHBOOK} from "./configs"
import axios from "axios"


class DeleteCashBook {

    deleteCashbookDetailByID = async (data) =>{
      const  token = localStorage.getItem('TOKEN');
        try {
            const res = await axios.delete(`${API_DELETE_CASHBOOK}/${data}`,{ headers: { authorization: `Bearer ${token}`} });
            return res
          } catch (error) {
            return error?.response?.data || error;
          }
    }
}

const deleteCashbookDetail = new DeleteCashBook();
export default deleteCashbookDetail