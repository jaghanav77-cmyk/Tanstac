import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/api";

function UsersList() {
  const {
    data: users,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isPending) {
    return (
      <section className="card">
        <p>Loading users...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="card">
        <p className="error-message">{error.message}</p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>Stored Users</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div className="user-item" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <small>User ID: {user.id}</small>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default UsersList;