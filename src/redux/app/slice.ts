import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  loading: boolean;
  token?: string;
}
const initialState: IInitialState = {
  loading: false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading(state, action: { payload: boolean }) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setToken(state, action) {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setAppLoading, setToken } = appSlice.actions;
export default appSlice.reducer;
