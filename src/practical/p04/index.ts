import axios from "axios";

interface CommentCount {
  postId: number;
  totalComments: number;
}

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function countCommentsByPost(): Promise<CommentCount[]> {
  try {
    const res = await axios.get<ApiComment[]>("https://jsonplaceholder.typicode.com/comments");
    const comments = res.data;

    // Group and count comments by postId using reduce
    const countMap = comments.reduce<Record<number, number>>((acc, comment) => {
      acc[comment.postId] = (acc[comment.postId] || 0) + 1;
      return acc;
    }, {});

    // Convert to array format
    return Object.entries(countMap).map(([postId, count]) => ({
      postId: Number(postId),
      totalComments: count,
    }));
  } catch (error) {
    return [];
  }