import { client } from './api'

export default async function getCommentaries(data){

    const query = `
    {
      comments(where: {postId:"${data}"},stage: DRAFT, orderBy: createdAt_DESC) {
        authorName
        authorPicture
        commentBody
        id
        createdAt
      }
    }`;

    const result = await client.query(query).toPromise()

    const comments = await result.data

    return comments
}