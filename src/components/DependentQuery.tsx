import { useQuery } from "@tanstack/react-query";
import {
  fetchUsers,
  fetchUserById,
} from "../api/api";

function DependentQuery() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const firstUserId = usersQuery.data?.[0]?.id;

  const userQuery = useQuery({
    queryKey: ["user", firstUserId],
    queryFn: () => fetchUserById(firstUserId!),
    enabled: !!firstUserId,
  });

  if (usersQuery.isPending) {
    return (
      <div>
        <h2>Dependent Queries</h2>
        <p>Loading users...</p>
      </div>
    );
  }

  if (usersQuery.isError) {
    return (
      <div>
        <h2>Dependent Queries</h2>
        <p>Unable to load users.</p>
      </div>
    );
  }

  if (!firstUserId) {
    return (
      <div>
        <h2>Dependent Queries</h2>
        <p>No users found.</p>
      </div>
    );
  }

  if (userQuery.isPending) {
    return (
      <div>
        <h2>Dependent Queries</h2>
        <p>Loading selected user...</p>
      </div>
    );
  }

  if (userQuery.isError) {
    return (
      <div>
        <h2>Dependent Queries</h2>
        <p>Unable to load selected user.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Dependent Queries</h2>

      <p>
        First, we fetch the users.
      </p>

      <p>
        Then we use the first user's ID to fetch
        that user.
      </p>

      <h3>User Details</h3>

      <p>ID: {userQuery.data.id}</p>
      <p>Name: {userQuery.data.name}</p>
      <p>Email: {userQuery.data.email}</p>
    </div>
  );
}

export default DependentQuery;