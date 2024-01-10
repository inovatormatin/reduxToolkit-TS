import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

// creating async action's

// first argument is name of action
// second argument is the function
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (value: number) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return value;
  }
);

// Creating of action directly with the help of counterSlice. No need of writting extra code.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
