import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { fetchUsers } from "../api/api";
import { queryKeys } from "../queries/queryKeys";

function InvalidationExample() {
  const queryClient = useQueryClient();

  const {
    data,
    isPending,
  } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: fetchUsers,
  });

  function handleInvalidate() {
    queryClient.invalidateQueries({
      queryKey: queryKeys.users.all,
    });
  }

  function handleRefetch() {
    queryClient.refetchQueries({
      queryKey: queryKeys.users.all,
    });
  }

if (isPending) {
  return <p>Loading users...</p>;
}
if (!data) {
  return <p>No users found.</p>;
}

  return (
    <section>
      <h2>Query Invalidation & Refetching</h2>

      <button onClick={handleInvalidate}>
        Invalidate Users
      </button>

      <button onClick={handleRefetch}>
        Refetch Users
      </button>

      {data.map((user) => (
        <div className="item-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  );
}

export default InvalidationExample;