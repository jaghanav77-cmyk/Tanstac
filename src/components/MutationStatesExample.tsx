import { useMutation } from "@tanstack/react-query";

import { createUser } from "../api/api";

function MutationStatesExample() {
  const mutation = useMutation({
    mutationFn: createUser,

    onSuccess: (data) => {
      console.log("Created user:", data);
    },

    onError: (error) => {
      console.log("Error:", error.message);
    },

    onSettled: () => {
      console.log("Mutation finished");
    },
  });

  function handleCreateUser() {
    mutation.mutate({
      name: "Jaghanav",
      email: "jaghanav@example.com",
    });
  }

  return (
    <section>
      <h2>Mutation States & Error Handling</h2>

      <button
        onClick={handleCreateUser}
        disabled={mutation.isPending}
      >
        {mutation.isPending
          ? "Saving..."
          : "Create Sample User"}
      </button>

      {mutation.isIdle && (
        <p>The mutation has not started.</p>
      )}

      {mutation.isPending && (
        <p>The mutation is running.</p>
      )}

      {mutation.isSuccess && (
        <p>The mutation was successful.</p>
      )}

      {mutation.isError && (
        <p>
          Error occurred:
          {mutation.error.message}
        </p>
      )}
    </section>
  );
}

export default MutationStatesExample;