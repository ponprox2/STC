import { API_USER_INFO } from './configs';
import axios from 'axios';

class UserInfov2 {
  getUserInfoV2 = async () => {
    const  token = localStorage.getItem('TOKEN');
    try {
      const response = await axios.get(API_USER_INFO, {
        headers: { authorization: `Bearer ${token}` }
      });
      return response;
    } catch (error) {
      return error?.response?.data || error;
    }
  };
}

const userInfov2 = new UserInfov2();
export default userInfov2;
