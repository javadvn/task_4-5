import React, { useState } from "react";
import UsersTable from "./UsersTable";
import UserPosts from "./UserPosts";

function Users() {
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <UsersTable onSelectUser={handleSelectUser} />
      <UserPosts selectedUserId={selectedUserId} />
    </div>
  );
}

export default Users;
