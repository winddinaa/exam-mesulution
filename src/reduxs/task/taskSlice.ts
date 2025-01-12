// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { ITask } from "@/utils/interface/task.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  loading: boolean;
  error: any;
  task: ITask[];
}

const initialState: TaskState = {
  loading: false,
  error: "",
  task: [],
};

export const getTask = createAsyncThunk(
  "api/getPost",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    return data;
  }
);

const taskSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.task = action.payload.data;
        state.loading = false;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
