import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/api";
import { queryKeys } from "../queries/queryKeys";

function CacheExample() {
  const {
    data,
    isPending,
    isFetching,
    dataUpdatedAt,
  } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: fetchUsers,
    staleTime: 30 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  if (isPending) {
    return <p>Loading users for the first time...</p>;
  }

  if (!data) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <h2>Cache Example</h2>

      {isFetching && <p>Updating users...</p>}

      <p>
        Data updated at:{" "}
        {new Date(dataUpdatedAt).toLocaleTimeString()}
      </p>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CacheExample;