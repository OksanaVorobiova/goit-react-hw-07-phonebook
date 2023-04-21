export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
