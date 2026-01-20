import axios from "axios";

interface Posts {
  id: number;
  title: string;
}

export async function getEdgePosts(): Promise<Posts[]> {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const posts = await response.data;
    if (posts.length === 0) return [];
    const first = posts[0];
    const last = posts[posts.length - 1];
    return [
      { id: first.id, title: first.title },
      { id: last.id, title: last.title },
    ];
  } catch (error) {
    return [];
  }
}