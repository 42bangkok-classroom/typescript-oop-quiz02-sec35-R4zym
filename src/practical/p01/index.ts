export function getEdgePosts(id: number, title: string) {
  return "id: " + id + " title: " + title;
}

async function getEdgePosts() {
  try {
    const title = await getEdgePosts()
    cosole.log()
  } catch (e) {
    
  }
