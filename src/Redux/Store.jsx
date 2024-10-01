import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Slice/employeeSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import departmentReducer from "./Slice/departmentSlice";
import roleReducer from "./Slice/roleSlice";

const rootReducer = combineReducers({
  employee: employeeReducer,
  department: departmentReducer,
  role: roleReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export const persistor = persistStore(store);
