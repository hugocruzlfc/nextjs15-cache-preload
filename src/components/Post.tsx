import { Suspense } from "react";
import Comments from "./Comments";
import { getPost } from "@/access-data";

export default async function Post({ postId }: { postId: string }) {
  const post = await getPost(postId);

  // The suspense boundary around <Comments> will not be visible, because the await has already completed
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      <h2>Title: {post?.title}</h2>
      Post comments:
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments postId={postId} />
      </Suspense>
    </div>
  );
}
