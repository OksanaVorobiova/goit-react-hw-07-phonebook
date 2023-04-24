export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const handleFulfilled = (state, action) => {
  return {
    ...state,
    items: action.payload,
    isLoading: false,
    error: null,
  };
};
