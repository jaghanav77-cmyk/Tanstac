import { useInfiniteQuery } from "@tanstack/react-query";

import {
  fetchProductsForInfiniteQuery,
} from "../api/api";

function InfiniteQueryExample() {
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", "infinite"],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      fetchProductsForInfiniteQuery(pageParam),

    getNextPageParam: (lastPage) => {
      const nextPage =
        lastPage.skip / lastPage.limit + 2;

      const totalPages = Math.ceil(
        lastPage.total / lastPage.limit
      );

      if (nextPage <= totalPages) {
        return nextPage;
      }

      return undefined;
    },
  });

  if (isPending) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <h2>Infinite Queries</h2>

      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          <h3>Page {pageIndex + 1}</h3>

          {page.products.map((product) => (
            <div
              className="item-card"
              key={product.id}
            >
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={
          !hasNextPage || isFetchingNextPage
        }
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "No More Products"}
      </button>
    </section>
  );
}

export default InfiniteQueryExample;