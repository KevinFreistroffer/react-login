
export const setLoadingValues = (loading, text) => {
    console.log('setLoadingValues action');
    return {
        type: 'SET_LOADING_VALUES',
        payload: {
            loading,
            text
        }
    }
}

