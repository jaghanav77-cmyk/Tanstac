import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { fetchUsers } from "../api/api";

function Authentication() {
  const [email, setEmail] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (email: string) => {
      const users = await fetchUsers();

      const user = users.find(
        (user) => user.email === email
      );

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    },
  });

  const handleLogin = () => {
    loginMutation.mutate(email);
  };

  return (
    <div>
      <h2>Authentication</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
      />

      <button
        onClick={handleLogin}
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending
          ? "Checking..."
          : "Login"}
      </button>

      {loginMutation.isError && (
        <p>{loginMutation.error.message}</p>
      )}

      {loginMutation.isSuccess && (
        <div>
          <h3>Login Successful</h3>

          <p>
            Welcome {loginMutation.data.name}
          </p>

          <p>
            Email: {loginMutation.data.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default Authentication;