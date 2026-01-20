import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  id: number;
  title: string;
}

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPostsByUser(userId: number): Promise<Post[]> {
  try {
    const res = await axios.get<ApiPost[]>(url);
    const posts = res.data;

    return posts
      .filter((p) => p.userId === userId)
      .map(({ id, title }) => ({ id, title }));
  } catch (error) {

    return [];
  }
}