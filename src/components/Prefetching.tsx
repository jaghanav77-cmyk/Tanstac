import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { fetchUserById } from "../api/api";

function Prefetching() {
  const queryClient = useQueryClient();

  const prefetchUser = async (userId: number) => {
    await queryClient.prefetchQuery({
      queryKey: ["user", userId],
      queryFn: () => fetchUserById(userId),
    });
  };

  const userQuery = useQuery({
    queryKey: ["user", 1],
    queryFn: () => fetchUserById(1),
  });

  if (userQuery.isPending) {
    return (
      <div>
        <h2>Prefetching</h2>
        <p>Loading user...</p>
      </div>
    );
  }

  if (userQuery.isError) {
    return (
      <div>
        <h2>Prefetching</h2>
        <p>Unable to load user.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Prefetching</h2>

      <button
        onMouseEnter={() => prefetchUser(1)}
      >
        Prepare User 1
      </button>

      <p>User Name: {userQuery.data.name}</p>
      <p>Email: {userQuery.data.email}</p>
    </div>
  );
}

export default Prefetching;