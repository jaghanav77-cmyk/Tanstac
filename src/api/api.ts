export type User = {
  id: number;
  name: string;
  email: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const USERS_API_URL = "http://localhost:3000/users";

const JSONPLACEHOLDER_USERS_URL =
  "https://jsonplaceholder.typicode.com/users";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

const TODOS_API_URL =
  "https://jsonplaceholder.typicode.com/todos?_limit=5";

// Get all users from JSON Server
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(USERS_API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch users");
  }

  return response.json();
}

// This name is used by UsersList.tsx
export async function getUsers(): Promise<User[]> {
  return fetchUsers();
}

// Get one user by ID from JSON Server
export async function fetchUserById(
  userId: number
): Promise<User> {
  const response = await fetch(
    `${USERS_API_URL}/${userId}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch user");
  }

  return response.json();
}

// Create a user in db.json through JSON Server
export async function createUser(
  user: Omit<User, "id">
): Promise<User> {
  const response = await fetch(USERS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Unable to create user");
  }

  return response.json();
}

// Update a user in db.json through JSON Server
export async function updateUser(
  user: User
): Promise<User> {
  const response = await fetch(
    `${USERS_API_URL}/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    throw new Error("Unable to update user");
  }

  return response.json();
}

// Delete a user from db.json through JSON Server
export async function deleteUser(
  userId: number
): Promise<void> {
  const response = await fetch(
    `${USERS_API_URL}/${userId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to delete user");
  }
}

// Fetch products
export async function fetchProducts(
  page: number
): Promise<ProductResponse> {
  const limit = 10;
  const skip = (page - 1) * limit;

  const response = await fetch(
    `${PRODUCTS_API_URL}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  return response.json();
}

// Fetch products for infinite query
export async function fetchProductsForInfiniteQuery(
  page: number
): Promise<ProductResponse> {
  const limit = 10;
  const skip = (page - 1) * limit;

  const response = await fetch(
    `${PRODUCTS_API_URL}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  return response.json();
}

// Fetch todos
export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(TODOS_API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch todos");
  }

  return response.json();
}

// Update a todo
export async function updateTodo(
  todo: Todo
): Promise<Todo> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );

  if (!response.ok) {
    throw new Error("Unable to update todo");
  }

  return response.json();
}