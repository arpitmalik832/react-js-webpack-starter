import { createSlice } from '@reduxjs/toolkit';

export const apisSlice = createSlice({
  name: 'apis',
  initialState: {
    api1Host: 'no-url',
    api1Headers: {},
  },
  reducers: {
    updateApi1Host: (state, action) => ({
      ...state,
      api1Host: action.payload,
    }),
    updateApi1Headers: (state, action) => ({
      ...state,
      api1Headers: action.payload,
    }),
    addToApi1Headers: (state, action) => {
      Object.assign(state.api1Headers, {
        [action.payload.key]: action.payload.value,
      });

      return state;
    },
  },
});

export const { updateApi1Host, updateApi1Headers, addToApi1Headers } =
  apisSlice.actions;

export default apisSlice.reducer;
