import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

function fetchContacts() {
  return axios.get("/contacts");
}

function addContact(contact) {
  return axios.post("/contacts", contact);
}

function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

const contactsAPI = { fetchContacts, addContact, deleteContact };

export default contactsAPI;
