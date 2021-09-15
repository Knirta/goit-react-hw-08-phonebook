import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { contactsSelectors, contactsOperations } from "redux/contacts";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts yet...</p>
      )}
    </>
  );
};

export default ContactsPage;
