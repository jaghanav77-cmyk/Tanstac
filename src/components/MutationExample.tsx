import { useState } from "react";
import type { FormEvent } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "../api/api";

function MutationExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      alert("User created successfully");

      setName("");
      setEmail("");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: () => {
      alert("Unable to create user");
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter both name and email");
      return;
    }

    mutation.mutate({
      name: name.trim(),
      email: email.trim(),
    });
  }

  return (
    <section className="card">
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Creating..." : "Create User"}
        </button>
      </form>

      {mutation.isSuccess && (
        <p className="success-message">User creation completed.</p>
      )}

      {mutation.isError && (
        <p className="error-message">
          {mutation.error.message}
        </p>
      )}
    </section>
  );
}

export default MutationExample;