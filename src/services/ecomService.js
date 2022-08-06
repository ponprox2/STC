import axios from 'axios';
import { API_BUSINESS_URL, API_ECOM_URL, BASE_URL } from 'src/config';

class EcomService {
  getAccessToken = () => localStorage.getItem('accessToken');
  getAccessUserId = () => localStorage.getItem('userId');

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
      console.log(error);
      return error?.response || error;
    }
  };

  getShopeeLink = async () => {
    try {
      const config = {
        method: 'get',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`
        },
        url: `${API_ECOM_URL}/shopee/get-auth-link`
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };

  getShopeeAccessToken = async (data) => {
    try {
      const config = {
        method: 'get',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`
        },
        url: `${API_ECOM_URL}/shopee/get-access-token?shop_id=${data.shop_id}`
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };

  syncStore = async (data) => {
    try {
      const config = {
        method: 'post',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'x-user-id': this.getAccessUserId()
        },
        url: `${API_ECOM_URL}/synchronize/sync`,
        data
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };

  getStores = async (data) => {
    try {
      const config = {
        method: 'get',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'x-user-id': this.getAccessUserId()
        },
        url: `${API_BUSINESS_URL}/contact?business_id=${
          data?.business_id || ''
        }&is_ecom_contact=${true}&seller_id=${
          data?.seller_id || ''
        }&source_key=${data?.source_key || ''}`
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };

  debtReminder = async (data) => {
    try {
      const config = {
        method: 'post',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'x-user-id': this.getAccessUserId()
        },
        url: `${BASE_URL}/detail_reminder`,
        data
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };

  confirmTransaction = async (data) => {
    try {
      const config = {
        method: 'post',
        headers: {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'x-user-id': this.getAccessUserId()
        },
        url: `${BASE_URL}/remind-pay-contact-transaction`,
        data
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return error?.response || error;
    }
  };
}

const ecomService = new EcomService();

export default ecomService;
