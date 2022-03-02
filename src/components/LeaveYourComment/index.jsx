import { useAuth0 } from "@auth0/auth0-react"
import { useState, useContext } from 'react';
import createComment from '../../services/createComment'
import { NewCommentaryContext } from '../../hooks/NewCommentaryContext'

import styles from './styles.module.css'

export default function LeaveYourComment({postId}){

    const { newCommentaryState, setNewCommentaryState } = useContext(NewCommentaryContext)

    const { user, loginWithRedirect } = useAuth0();

    const [ comment, setComment ] = useState("");

    async function handlerComment() {
        const data = {
            authorName: user.given_name ? user.given_name : user.nickname,
            authorPicture: user.picture,
            commentBody: comment,
            postId: postId,
        }

        const state = await createComment(data);

        if(state == true){
            setComment("");
            setNewCommentaryState(true);
        }
    }

    return user ? (
        <div className={styles.CommentSession}>
            <div className={styles.profileContent}>
                <img src={user.picture} alt="" />
                {user.given_name ? <span>{user.given_name}</span> : <span>{user.nickname}</span>}
            </div>
            <div className={styles.LeaveYourCommentContainer}>
                <textarea id="CommentInput" placeholder='Add a comment' value={comment} onChange={({target})=> setComment(target.value)} />
                <button onClick={handlerComment}>Post</button>
            </div>
        </div>
    ) : (
        <div className={styles.CommentSession}>
            <div className={styles.profileContent}>         

            </div>
            <div className={styles.LeaveYourCommentContainer}>
                <div>
                    <p>You have to <a onClick={() => loginWithRedirect()}>LogIn</a> to comment</p>
                </div>
                <button disabled={true}>Post</button>
            </div>
        </div>
    )
}