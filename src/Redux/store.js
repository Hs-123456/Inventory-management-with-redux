import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import inventorySlice from "./inventorySlice";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  inventory: inventorySlice,
});
const _persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: _persistedReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };
