import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../Component/Data/jsondata";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(User);
    }, 1200);
  });
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
    searchquery: "",
    id: null,
  },
  reducers: {
    setSelectedEmail: (state, action) => {
      state.id = action.payload;
    },
    rejectcandidate: (state, action) => {
      const index = state.items.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        let currontStatus = state.items[index].status;
        state.items[index].status =
          currontStatus === "pending"
            ? false
            : currontStatus === false
            ? "pending"
            : currontStatus === true
            ? false
            : null;
      }
    },
    sortlisted: (state, action) => {
      const index = state.items.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        let currontStatus = state.items[index].status;

        state.items[index].status =
          currontStatus === "pending"
            ? true
            : currontStatus === true
            ? "pending"
            : currontStatus === false
            ? true
            : null;
      }
    },
    search: (state, action) => {
      state.searchquery = action.payload;
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm)
      );
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

export const { setSelectedEmail, rejectcandidate, sortlisted, search } =
  dataSlice.actions;
export default dataSlice.reducer;
