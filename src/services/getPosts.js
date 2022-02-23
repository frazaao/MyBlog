import { client } from './api'

const query = `
query Posts{
    posts(orderBy: createdAt_DESC) {
      id
      slug
      title
      coverImage {
        url
      }
      content {
        html
      }
      author {
        id
        name
      }
    }
}`;

export default async function getPosts(){

    const result = await client.query(query).toPromise()

    const posts = await result.data 

    return posts
}