import { useSelector, useDispatch } from "react-redux";
import React from "react";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.png";

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={defaultAvatar} width="50px" alt="avatar" />
      <span>Wellcome, {userName}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
