export const mapConfig = {
  apiGoogle: process.env.REACT_APP_MAP_GOOGLE,
  apiMapBox: process.env.REACT_APP_MAP_MAPBOX
};

export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APPID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  apiKey: 'AIzaSyDBmq9z5RKzFZcWWzLPEEMb9H6N_d7YHBA',
  authDomain: 'finan-1ae3f.firebaseapp.com',
  projectId: 'finan-1ae3f',
  storageBucket: 'finan-1ae3f.appspot.com',
  messagingSenderId: '761818603160',
  appId: '1:761818603160:web:57f044022d348a9c817aed',
  measurementId: 'G-5JY4J1L61T'
};

export const cloudinaryConfig = {
  cloudinaryKey: process.env.REACT_APP_CLOUDINARY_KEY,
  cloudinaryPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_URL
};

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const APP_VERSION = '2.0.0';
export const LAZADA_AUTH_URL = process.env.REACT_APP_LAZADA_AUTH_URL;
export const STORE_REDIRECT_URL = process.env.REACT_APP_STORE_REDIRECT_URL;
export const PLATFORM = process.env.REACT_APP_PLATFORM;
// export const API_LOGIN_URL = `${BASE_URL}/generate-otp`;
export const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
// export const API_LOGIN_URL = `${BASE_URL}/api/login`;
export const API_LOGIN_URL = `${BASE_URL}/login-firebase`;
export const API_CONFIRM_OTP_URL = `${BASE_URL}/confirm-otp`;
export const API_USER_URL = `${BASE_URL}/ms-user-management/api`;
export const API_BUSINESS_URL = `${BASE_URL}/ms-business-management/api`;
export const API_TRANSACTION_URL = `${BASE_URL}/ms-transaction-management/api`;
export const API_ECOM_URL = `${BASE_URL}/ms-ecom-adapter/api`;

export const ENABLE_REDUX_LOGGER = false;

export const DEEP_LINK_APP = 'me.finan.app://';
export const LINK_DOWNLOAD_ANDROID =
  'https://play.google.com/store/apps/details?id=me.finan.app';
export const LINK_DOWNLOAD_IOS =
  'https://apps.apple.com/vn/app/s%E1%BB%95-b%C3%A1n-h%C3%A0ng/id1560099589';

export const DEEP_LINK_CASHBOOK_APP = 'https://finanstc.page.link/N8fh';
export const LINK_CASHBOOK_DOWNLOAD_ANDROID =
  'https://play.google.com/store/apps/details?id=me.finan.salesbook';
export const LINK_CASHBOOK_DOWNLOAD_IOS =
  'https://apps.apple.com/us/app/s%E1%BB%95-thu-chi/id1609932665';

export default {};
