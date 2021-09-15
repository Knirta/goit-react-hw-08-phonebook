import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Button from "@material-ui/core/Button";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.png";
import "./UserMenu.scss";

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className="menuWrapper">
      <img src={defaultAvatar} width="40px" alt="avatar" />
      <span className="greeting">
        Wellcome, <span className="userName">{userName}</span>!
      </span>
      <Button
        variant="outlined"
        color="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
