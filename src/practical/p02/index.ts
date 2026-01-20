import axios from "axios";

interface Posts {
  id: number;
  title: string;
}

export async function getPostsByUser(userId: number): Promise<Posts[]> {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const posts = await response.data;
    return posts
      .filter((post: any) => post.userId === userId)
      .map((post: any) => ({ id: post.id, title: post.title }));
  } catch (error) {
    return [];
  }
}