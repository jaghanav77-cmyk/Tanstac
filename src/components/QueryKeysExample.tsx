import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../api/api";
import { queryKeys } from "../queries/queryKeys";

function QueryKeysExample() {
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: fetchUsers,
  });

  if (isPending) {
    return <p>Loading users...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <h2>Query Keys & Query Key Factories</h2>

      <p>
        The query key used here is:
        <strong> ["users"] </strong>
      </p>

      {data.map((user) => (
        <div className="item-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  );
}

export default QueryKeysExample;