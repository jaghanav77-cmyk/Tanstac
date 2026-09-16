import QueryKeysExample from "./components/QueryKeysExample";
import CacheExample from "./components/CacheExample";
import InvalidationExample from "./components/InvalidationExample";
import MutationExample from "./components/MutationExample";
import MutationStatesExample from "./components/MutationStatesExample";
import PaginationExample from "./components/PaginationExample";
import InfiniteQueryExample from "./components/InfiniteQueryExample";

import DependentQuery from "./components/DependentQuery";
import ParallelQueries from "./components/ParallelQueries";
import UseQueriesExample from "./components/UseQueriesExample";
import Prefetching from "./components/Prefetching";
import SelectExample from "./components/SelectExample";
import Authentication from "./components/Authentication";

function App() {
  return (
    <main className="app-container">
      <h1>TanStack Query Learning Project</h1>

      <p className="intro-text">
        This project demonstrates important TanStack Query
        concepts with complete examples.
      </p>

      {/* Query Keys */}

      <div className="section-container">
        <QueryKeysExample />
      </div>

      {/* Cache */}

      <div className="section-container">
        <CacheExample />
      </div>

      {/* Stale Time vs GC Time */}

      <div className="section-container">
        <h2>Stale Time vs GC Time</h2>

        <p>
          Stale time controls how long data is fresh.
        </p>

        <p>
          GC time controls how long unused data remains
          in the cache.
        </p>
      </div>

      {/* Query Invalidation */}

      <div className="section-container">
        <InvalidationExample />
      </div>

      {/* Mutations */}

      <div className="section-container">
        <MutationExample />
      </div>

      {/* Mutation States */}

      <div className="section-container">
        <MutationStatesExample />
      </div>

      {/* Pagination */}

      <div className="section-container">
        <PaginationExample />
      </div>

      {/* Infinite Query */}

      <div className="section-container">
        <InfiniteQueryExample />
      </div>

      {/* Dependent Queries */}

      <div className="section-container">
        <DependentQuery />
      </div>

      {/* Parallel Queries */}

      <div className="section-container">
        <ParallelQueries />
      </div>

      {/* useQueries */}

      <div className="section-container">
        <UseQueriesExample />
      </div>

      {/* Prefetching */}

      <div className="section-container">
        <Prefetching />
      </div>

      {/* Select & Data Transformation */}

      <div className="section-container">
        <SelectExample />
      </div>

      {/* Authentication */}

      <div className="section-container">
        <Authentication />
      </div>
    </main>
  );
}

export default App;