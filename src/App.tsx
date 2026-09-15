import QueryKeysExample from "./components/QueryKeysExample";
import CacheExample from "./components/CacheExample";
import InvalidationExample from "./components/InvalidationExample";
import MutationExample from "./components/MutationExample";
import MutationStatesExample from "./components/MutationStatesExample";
import PaginationExample from "./components/PaginationExample";
import InfiniteQueryExample from "./components/InfiniteQueryExample";


function App() {
  return (
    <main className="app-container">
      <h1>TanStack Query Learning Project</h1>

      <p className="intro-text">
        This project demonstrates important TanStack Query
        concepts with complete examples.
      </p>

      <div className="section-container">
        <QueryKeysExample />
      </div>

      <div className="section-container">
        <CacheExample />
      </div>

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

      <div className="section-container">
        <InvalidationExample />
      </div>

      <div className="section-container">
        <MutationExample />
      </div>

      <div className="section-container">
        <MutationStatesExample />
      </div>


      <div className="section-container">
        <PaginationExample />
      </div>

      <div className="section-container">
        <InfiniteQueryExample />
      </div>
    </main>
  );
}

export default App;