import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";

const middleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devtools: process.env.NODE_ENV === "development",
});

export default store;
