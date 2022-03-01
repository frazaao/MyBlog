import { client } from './api'

export default async function getPost(slug){

    const query = `
    {
      posts(where: {slug: "${slug}"}) {
        id
        slug
        title
        createdAt
        coverImage {
          url
        }
        content {
          html
        }
        author {
          id
          name
          picture {
            url
          }
        }
      }
    }`;

    const result = await client.query(query).toPromise()

    const posts = await result.data 

    return posts
}