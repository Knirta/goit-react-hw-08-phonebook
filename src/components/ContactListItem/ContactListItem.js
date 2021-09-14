import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { contactsOperations } from "redux/contacts/";
import "./ContactListItem.scss";

const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className="Item">
      <p>
        {name}: {number}
      </p>
      <button
        className="Item__button"
        type="button"
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
