import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../Component/Data/jsondata";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(User);
    }, 100);
  });
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    id: null,
  },
  reducers: {
    setSelectedEmail: (state, action) => {
      state.id = action.payload;
    },
    rejectcandidate: (state, action) => {
      const index = state.items.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.items[index].status = false;
      }
    },
    sortlisted: (state, action) => {
      const index = state.items.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.items[index].status = true;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedEmail, rejectcandidate, sortlisted } =
  dataSlice.actions;
export default dataSlice.reducer;
