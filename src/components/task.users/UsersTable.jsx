import React, { useState, useEffect } from "react";
import { Input, FormGroup, Label } from "reactstrap";
import axios from "axios";

function UsersTable({ onSelectUser }) {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    onSelectUser(selectedUserId);
  };

  return (
    <FormGroup>
      <Label for="userId">Select User:</Label>
      <Input type="select" name="userId" id="userId" onChange={handleUserSelect}>
        <option value="">Select</option>
        {users.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
}

export default UsersTable;
