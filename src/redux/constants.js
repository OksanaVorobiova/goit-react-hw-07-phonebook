export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

/*export const handleFulfilled = (state, action) => {
  return {
    ...state,
    items: action.payload,
    isLoading: false,
    error: null,
  };
};*/
