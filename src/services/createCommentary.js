import { client } from './api'

export default async function createComment(data){

    const query = `
    mutation CreateComment {
      createComment(
        data: {authorName: "${data.authorName}", authorPicture: "${data.authorPicture}", commentBody: "${data.commentBody}", postId: {connect: {id: "${data.postId}"}}}
      ) {
        authorName
        authorPicture
        commentBody
        postId {
          id
        }
      }
    }
    `;

    const result = await client.mutation(query).toPromise()

    const comment = await result.data

    return true
}