import contactsActions from "./contacts-actions";
import contactsAPI from "services/contacts-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = { name, number };
    dispatch(contactsActions.addContactRequest());

    try {
      const { data } = await contactsAPI.addContact(contact);
      dispatch(contactsActions.addContactSuccess(data));
    } catch (error) {
      dispatch(contactsActions.addContactError(error));
    }
  };

export const deleteContact = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await contactsAPI.deleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
