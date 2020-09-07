
export const setLoadingValuesAction = (loading, text) => {
    console.log('setLoadingValuesAction action');
    return {
        type: 'SET_LOADING_VALUES',
        payload: {
            loading,
            text
        }
    }
}

export const setUserValuesAction = (username, password) => {
    console.log('setLoadingValuesAction action');
    return {
        type: 'SET_USER',
        payload: {
            username,
            password
        }
    }
}

