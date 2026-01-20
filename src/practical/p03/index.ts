import axios from "axios";

interface Posts {
  postId: number;
  title: string;
  totalComments: number;
}

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function mapPostWithCommentCount(): Promise<Posts[]> {
  try {
    const response1 = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const response2 = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/comments",
    );
    const posts = response1.data;
    const comments = response2.data;

    return posts
      .map((post: any) => ({
      postId: post.id,
      title: post.title,
      totalComments: comments
        .filter((c: any) => c.postId === post.id)
        .length,
    }));
  } catch (error) {
    return [];
  }
}