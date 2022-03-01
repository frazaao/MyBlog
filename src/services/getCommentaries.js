import { client } from './api'

export default async function getCommentaries(data){

    const query = `
    {
      comments(where: {postId: {id: "${data}"}}) {
        authorName
        authorPicture
        commentBody
      }
    }`;

    const result = await client.query(query).toPromise()

    const comments = await result.data 

    console.log(comments)

    return comments
}