import React from "react";
import defaultAvatar from "./default-avatar.png";

const UserMenu = () => {
  return (
    <div>
      <img src={defaultAvatar} width="50px" alt="avatar" />
      <span>Wellcom, Cat</span>
      <button type="button">Log Out</button>
    </div>
  );
};

export default UserMenu;
