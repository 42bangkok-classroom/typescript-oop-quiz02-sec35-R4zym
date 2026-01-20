import axios from "axios";

interface CommentCount {
  postId: number;
  totalComments: number;
}

export async function countCommentsByPost(): Promise<CommentCount[]> {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
    );
    const comments = res.data;

    const counts: Record<number, number> = {};

    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const id = comment.postId;

      if (counts[id]) {
        counts[id] = counts[id] + 1;
      } else {
        counts[id] = 1;
      }
    }

    const finalResult: CommentCount[] = [];

    for (const postId in counts) {
      finalResult.push({
        postId: Number(postId),
        totalComments: counts[postId],
      });
    }

    return finalResult;
  } catch (error) {
    return [];
  }
}
