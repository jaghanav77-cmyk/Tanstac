import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../api/api";

function SelectExample() {
  const userQuery = useQuery({
    queryKey: ["user", 1],
    queryFn: () => fetchUserById(1),

    select: (user) => ({
      name: user.name,
      email: user.email,
    }),
  });

  if (userQuery.isPending) {
    return (
      <div>
        <h2>Select & Data Transformation</h2>
        <p>Loading user...</p>
      </div>
    );
  }

  if (userQuery.isError) {
    return (
      <div>
        <h2>Select & Data Transformation</h2>
        <p>Unable to load user.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Select & Data Transformation</h2>

      <p>
        Name: {userQuery.data.name}
      </p>

      <p>
        Email: {userQuery.data.email}
      </p>
    </div>
  );
}

export default SelectExample;