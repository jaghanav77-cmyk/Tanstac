import { useQueries } from "@tanstack/react-query";
import { fetchUserById } from "../api/api";

function UseQueriesExample() {
  const userIds = [1, 2, 3];

  const results = useQueries({
    queries: userIds.map((id) => ({
      queryKey: ["user", id],
      queryFn: () => fetchUserById(id),
    })),
  });

  const isLoading = results.some(
    (result) => result.isPending
  );

  const isError = results.some(
    (result) => result.isError
  );

  if (isLoading) {
    return (
      <div>
        <h2>useQueries</h2>
        <p>Loading users...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>useQueries</h2>
        <p>Unable to load one or more users.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>useQueries</h2>

      {results.map((result) => {
        if (!result.data) {
          return null;
        }

        return (
          <div key={result.data.id}>
            <h3>{result.data.name}</h3>

            <p>
              ID: {result.data.id}
            </p>

            <p>
              Email: {result.data.email}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UseQueriesExample;