import { useAuth0 } from "@auth0/auth0-react"
import { useState, useEffect } from 'react';
import createCommentary from '../../services/createCommentary'
import getCommentaries from '../../services/getCommentaries'

import styles from './styles.module.css'

export default function LeaveYourComment({postId}){

    const { user, loginWithRedirect } = useAuth0();

    const [ comment, setComment ] = useState("");

    const [ comentaries, setCommentaries ] = useState(null);

    useEffect(()=>{
        getCommentaries(postId)
        .then(result => setCommentaries(result))
    }, []);

    async function handlerComment() {
        const data = {
            authorName: user.given_name ? user.given_name : user.nickname,
            authorPicture: user.picture,
            commentBody: comment,
            postId: postId,
        }

        const state = await createCommentary(data);
    }

    return user ? (
        <div className={styles.CommentSession}>
            <div className={styles.profileContent}>
                <img src={user.picture} alt="" />
                {user.given_name ? <span>{user.given_name}</span> : <span>{user.nickname}</span>}
            </div>
            <div className={styles.LeaveYourCommentContainer}>
                <textarea id="CommentInput" placeholder='Add a comment' onChange={({target})=> setComment(target.value)} />
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