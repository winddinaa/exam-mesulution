import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";
import taskReducer from "../reduxs/task/taskSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
