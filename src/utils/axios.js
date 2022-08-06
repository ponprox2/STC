import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.status === 401) ||
        'Something went wrong'
    )
);

export default axiosInstance;
