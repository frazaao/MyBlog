import { gql } from 'urql';
import { client } from './api'

export default async function createComment(data){

    const query = gql`
    mutation CreateComment {
      createComment(
        data: {
          authorName: "${data.authorName}", 
          authorPicture: "${data.authorPicture}", 
          commentBody: "${data.commentBody}", 
          postId: "${data.postId}"
        }
      )
      {
        authorName
        authorPicture
        commentBody
        postId
      }
    }
    `;

    const result = await client.mutation(query).toPromise()

    return result.data.error ? false : true
}