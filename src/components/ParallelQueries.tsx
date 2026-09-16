import { useQuery } from "@tanstack/react-query";
import {
  fetchUsers,
  fetchProducts,
  fetchTodos,
} from "../api/api";

function ParallelQueries() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const productsQuery = useQuery({
    queryKey: ["products", 1],
    queryFn: () => fetchProducts(1),
  });

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (
    usersQuery.isPending ||
    productsQuery.isPending ||
    todosQuery.isPending
  ) {
    return (
      <div>
        <h2>Parallel Queries</h2>
        <p>Loading data...</p>
      </div>
    );
  }

  if (
    usersQuery.isError ||
    productsQuery.isError ||
    todosQuery.isError
  ) {
    return (
      <div>
        <h2>Parallel Queries</h2>
        <p>Something went wrong while loading data.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Parallel Queries</h2>

      <p>
        Users: {usersQuery.data.length}
      </p>

      <p>
        Products: {productsQuery.data.products.length}
      </p>

      <p>
        Todos: {todosQuery.data.length}
      </p>
    </div>
  );
}

export default ParallelQueries;