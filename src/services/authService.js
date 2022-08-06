import instance from 'axios';
import { API_LOGIN_URL, API_USER_URL } from 'src/config';

class AuthService {
  loginWithEmailAndPassword = async (email, password) => {
    const data = JSON.stringify({
      email: email.toLowerCase(),
      password,
      platform_name: 'AP'
    });

    const config = {
      method: 'post',
      url: API_LOGIN_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };
    try {
      const response = await instance(config);
      return response.data;
    } catch (error) {
      return error?.response?.data || error;
    }
  };

  loginWithPhone = async (data) => {
    const config = {
      method: 'post',
      url: API_LOGIN_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };
    try {
      const response = await instance(config);
      return response.data;
    } catch (error) {
      return error?.response?.data || error;
    }
  };

  loginWithToken = async (accessToken) => {
    const response = await instance.get(`${API_USER_URL}/auth`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response;
  };
}

const authService = new AuthService();

export default authService;
