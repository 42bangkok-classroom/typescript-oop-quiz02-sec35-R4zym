import axios from "axios";

interface Comment {
  postId: number | null;
  id: number;
  name: string;
  email: string;
  body: string;
}


export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    const { data } = await axios.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );

    if (!Array.isArray(data) || data.length === 0) {
      return {};
    }

    const result = data.reduce((acc, comment) => {
      const pid = comment.postId;
      if (pid === null || pid === undefined) return acc;

      acc[pid] = (acc[pid] ?? 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    return result;
  } catch {
    return {};
  }
}