import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/posts";
const resPosts = await axios.get<Posts[]>(url);
const posts = resPosts.data;

interface Posts {
  userID: number;
  id: number;
  title: string;
  body: string;
}

export async function getPostsByUser() {
  try {

  } catch (e) {
    
  }

}
