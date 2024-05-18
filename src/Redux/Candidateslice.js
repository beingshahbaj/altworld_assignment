import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../Component/Data/jsondata";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return new Promise((resolve, res) => {
    setTimeout(() => {
      resolve(User);
      // res("data is no available");
    }, 2000);
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
      const obj = state.items.find((user) => user.id === action.payload);
      if (obj) {
        let currontStatus = obj.status;
        obj.status =
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
    short: (state, action) => {
      const name = action.payload;
      if (name === "High") {
        state.items.sort((a, b) => {
          const first =
            a.behavioralMarks + a.communicationMarks + a.situationHandlingMarks;
          const second =
            b.behavioralMarks + b.communicationMarks + b.situationHandlingMarks;
          return first - second;
        });
      } else if (name === "Low") {
        state.items.sort((a, b) => a.percentage - b.percentage);
      } else {
        state.items.sort((a, b) => a.name.localeCompare(b.name));
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
        state.items.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedEmail, rejectcandidate, sortlisted, search, short } =
  dataSlice.actions;
export default dataSlice.reducer;
