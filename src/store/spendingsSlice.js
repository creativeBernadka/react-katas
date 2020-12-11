import { createSlice } from "@reduxjs/toolkit";

export const spendingsSlice = createSlice({
  name: "spendings",
  initialState: [],
  reducers: {
    addNewSpending: (state, action) => {
      const allIds = state.map(({ id }) => id);
      const newIndex = allIds.indexOf(action.payload.id);
      if (newIndex > -1) {
        state[newIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addNewSpending } = spendingsSlice.actions;

export const getAllSpendings = (state) => state.spendings;

export const getCurrentNumberOfSpendings = (state) => state.spendings.length;

export const getAllDistinctDates = (state) => {
  const dates = state.spendings.map(({ date }) => date);
  return [...new Set(dates)];
};

export const getAllSpendingsByDate = (date) => (state) => {
  return state.spendings.filter(
    ({ date: spendingsDate }) => spendingsDate === date
  );
};

export const getSpendingById = (id) => (state) => {
  return state.spendings.filter(({ id: spendingId }) => id === spendingId)[0];
};

export default spendingsSlice.reducer;
