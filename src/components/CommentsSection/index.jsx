import getCommentaries from '../../services/getCommentaries'
import { useState, useEffect, useContext } from 'react';
import { NewCommentaryContext } from '../../hooks/NewCommentaryContext'

import styles from './styles.module.css'


export default function CommentsSection({postId}){
    const [ commentaries, setCommentaries ] = useState([]);

    const { newCommentaryState, setNewCommentaryState } = useContext(NewCommentaryContext)

    useEffect(()=>{
        getCommentaries(postId)
        .then(({comments}) => setCommentaries(comments))
    }, []);

    useEffect(()=>{
        setNewCommentaryState(false);
        getCommentaries(postId)
        .then(({comments}) => setCommentaries(comments))
    }, [newCommentaryState]);

    return (
        <div className={styles.commentsSectionContainer}>
            {commentaries.map((commentary) => {
                const createdAt = new Date(commentary.createdAt)
                
                return (
                    <div className={styles.commentaryItem} key={commentary.id}>
                        <div className={styles.commentaryProfile}>
                            <img src={commentary.authorPicture} alt={commentary.authorName} />
                            <span>{commentary.authorName}</span>
                            <span>{createdAt.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className={styles.commentaryContent}>
                            <p>{commentary.commentBody}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}