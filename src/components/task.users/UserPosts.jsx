import React, { useState, useEffect } from "react";
import { Spinner, Table } from "reactstrap";
import axios from "axios";

function UserPosts({ selectedUserId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (selectedUserId) {
      setLoading(true);
      setError(undefined);
      setPosts([]);

      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
        .then(({ data }) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.toString());
          setLoading(false);
        });
    } else {
      setPosts([]); 
    }
  }, [selectedUserId]);

  return (
    <div>
      {error && <h5 color="red">Error occurred ....</h5>}
      {loading && <Spinner />}
      {posts.length > 0 && (
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ id, title, body }, i) => (
              <tr key={id}>
                <th scope="row">{i}</th>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserPosts;
