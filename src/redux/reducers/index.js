import { combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const SET_USER = 'SET_USER';

const initialState = {
  loading: false,
  text: '',
};

const userInitialState = {
  username: '',
  password: '',
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_VALUES':
      return {
        ...state,
        loading: action.payload.loading,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default combineReducers({ loadingReducer, userReducer });
