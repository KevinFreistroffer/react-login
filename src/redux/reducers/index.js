import { combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
    loading: true,
    text: 'One moment',
};

const loadingReducer = (state = initialState, action) => {
    console.log('loadingReducer');
    switch (action.type) {
        case 'SET_LOADING_VALUES':
            console.log('SET_LOADING_VALUES case');
            return {
                ...state,
                loading: action.payload.loading,
                text: action.payload.text,
            };
        default:
            return state;
    }
}

export default combineReducers({ loadingReducer: loadingReducer });