const  BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;


export const API_LOGIN_QR =`${BASE_URL}/finan-user/api/v1/auth/qr`
export const API_LOGIN_INFO = `${BASE_URL}/finan-user/api/v1/auth/qr/info`
export const API_LOGIN_CONFIRMATION = `${BASE_URL}/finan-user/api/v1/auth/qr/confirmation`

export const API_DELETE_CASHBOOK = `${BASE_URL}/finan-transaction/api/v1/business-transaction/delete`
export const API_GET_CASHBOOK = `${BASE_URL}/finan-transaction/api/v1/business-transaction/get-detail`
export const API_CASHBOOK_TOTAL_AMOUNT = `${BASE_URL}/finan-transaction/api/v1/business-transaction/get-amount-total`
export const API_USER_INFO = `${BASE_URL}/ms-user-management/api/auth/v2`


export const  token = localStorage.getItem('TOKEN');