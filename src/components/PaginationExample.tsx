import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../api/api";

function PaginationExample() {
  const [page, setPage] = useState(1);

  const {
    data,
    isPending,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", "page", page],
    queryFn: () => fetchProducts(page),
    placeholderData: (previousData) =>
      previousData,
  });

  function handlePrevious() {
    setPage((currentPage) =>
      Math.max(currentPage - 1, 1)
    );
  }

  function handleNext() {
    if (data && page < Math.ceil(data.total / data.limit)) {
      setPage((currentPage) => currentPage + 1);
    }
  }

  if (isPending) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const totalPages = Math.ceil(
    data.total / data.limit
  );

  return (
    <section>
      <h2>Pagination</h2>

      <p>
        Current page: {page} of {totalPages}
      </p>

      {isFetching && (
        <p>Loading another page...</p>
      )}

      {data.products.map((product) => (
        <div className="item-card" key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}

      <div className="button-group">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default PaginationExample;