import { getComments } from "@/access-data";
import Post from "@/components/Post";
import { Suspense } from "react";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  // Prefetch the comments, but don't await the promise, so it doesn't block rendering
  getComments(postId);

  return (
    <div>
      <h1>Post: {postId}</h1>
      <Suspense fallback={<div>Loading post...</div>}>
        <Post postId={postId} />
      </Suspense>
    </div>
  );
}
