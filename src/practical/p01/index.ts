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
    return posts;
  } catch (error) {
    return [];
  }
}