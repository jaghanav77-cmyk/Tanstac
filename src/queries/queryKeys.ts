export const queryKeys = {
  users: {
    all: ["users"] as const,

    detail: (userId: number) =>
      ["users", "detail", userId] as const,

    list: (page: number) =>
      ["users", "list", page] as const,
  },

  posts: {
    all: ["posts"] as const,

    detail: (postId: number) =>
      ["posts", "detail", postId] as const,
  },
};