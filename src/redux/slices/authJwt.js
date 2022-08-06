import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import authService from 'src/services/authService';
import { getBalancesSuccess } from './balance';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {}
};

const slice = createSlice({
  name: 'authJwt',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALISE
    getInitialize(state, action) {
      state.isLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },

    // LOGIN
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    // REGISTER
    registerSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    // LOGOUT
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  if (decoded.exp > currentTime) {
    const userId = localStorage.getItem('userId');
    return userId;
  }
  setSession('', null);
  return false;
};

const setSession = (name, accessToken) => {
  if (accessToken) {
    localStorage.setItem(name, accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    // localStorage.removeItem(name);
    localStorage.clear();
    delete axios.defaults.headers.common.Authorization;
  }
};

// ----------------------------------------------------------------------

export function login(data) {
  return async (dispatch) => {
    try {
      const response = await authService.loginWithPhone(data);
      if (response.status === 200) {
        const { token, user_info } = response.data;
        setSession('accessToken', token);
        setSession('userId', user_info.id);
        dispatch(slice.actions.loginSuccess({ user: user_info }));
        return { status: true, data: response.data, message: response.message };
      }
      return { status: false, message: response.message };
    } catch (error) {
      console.log(error);
    }
  };
}

// ----------------------------------------------------------------------

export function register({ email, password, firstName, lastName }) {
  return async (dispatch) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);
    dispatch(slice.actions.registerSuccess({ user }));
  };
}

// ----------------------------------------------------------------------

export function logout() {
  return async (dispatch) => {
    setSession('', null);
    dispatch(slice.actions.logoutSuccess());
  };
}

// ----------------------------------------------------------------------

export function getInitialize() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken) {
        const userId = isValidToken(accessToken);
        if (userId !== false) {
          const response = await authService.loginWithToken(accessToken);
          if (response.status === 200) {
            dispatch(
              slice.actions.getInitialize({
                isAuthenticated: true,
                user: response.data.data
              })
            );
            dispatch(getBalancesSuccess(response.data.data.list_business));
            return;
          }
          dispatch(
            slice.actions.getInitialize({
              isAuthenticated: false,
              user: null
            })
          );
        }
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            user: null
          })
        );
      }
    } catch (error) {
      console.error(error);
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          user: null
        })
      );
    }
  };
}
