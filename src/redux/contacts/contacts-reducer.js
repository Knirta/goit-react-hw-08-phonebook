import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload,
  [contactsActions.fetchContactsRequest]: () => null,

  [contactsActions.addContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactsRequest]: () => null,

  [contactsActions.deleteContactsError]: (_, { payload }) => payload,
  [contactsActions.deleteContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
