import { cache } from "react";

export const getPost = async (postId: string) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, 1000);
  });
  return [
    {
      body: "This is the first post on this blog.",
      id: 1,
      title: "Hello World",
    },
    {
      body: "This is the second post on this blog.",
      id: 2,
      title: "Hello Next.js",
    },
  ].find((post) => {
    return post.id.toString() === postId;
  });
};

// When using cache(), the return value can be cached/memoized per render across multiple server components
export const getComments = cache(async (postId: string) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, 1000);
  });
  return [
    {
      body: "This is the first comment on this blog.",
      id: 1,
      postId: 1,
    },
    {
      body: "This is the second comment on this blog.",
      id: 2,
      postId: 1,
    },
  ].filter((comment) => {
    return comment.postId.toString() === postId;
  });
});
