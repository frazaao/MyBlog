import { client } from './api'

export default async function getPost(slug){

    const query = `
    {
      posts(where: {slug: "${slug}"}) {
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

    const result = await client.query(query).toPromise()

    const posts = await result.data 

    return posts
}