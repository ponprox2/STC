import axios from 'axios';
import { API_ECOM_URL } from 'src/config';

class UserService {
  getLazadaAccessToken = async (data) => {
    try {
      const config = {
        method: 'get',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`
        },
        url: `${API_ECOM_URL}/lazada/get-access-token?code=${data}`
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      return error?.response || error;
    }
  };
}

const userService = new UserService();

export default userService;
