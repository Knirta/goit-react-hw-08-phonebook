import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "components/ContactListItem";
import { contactsSelectors } from "redux/contacts/";
import "./ContactList.scss";

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredItems);

  return (
    <ul className="ContactList">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
