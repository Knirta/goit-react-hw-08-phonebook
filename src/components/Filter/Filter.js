import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "redux/contacts/";
import "./Filter.scss";

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <p className="Filter__title">Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
