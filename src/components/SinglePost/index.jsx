import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import AuthorProfile from '../AuthorProfile'
import LeaveYourComment from '../LeaveYourComment';
import CommentsSection from '../CommentsSection';
import { NewCommentaryState } from '../../hooks/NewCommentaryContext'

export default function SinglePost({data, isSinglePage}){

    return (
        <div className={styles.postContent} key={data.id}>

            <img src={data.coverImage.url} alt={data.title} />

            <h3>{data.title}</h3>

            {isSinglePage && <AuthorProfile author={data.author} postCreatedAt={data.createdAt} />}

            <div className={isSinglePage ? styles.singleText : styles.textContainer}>
                <div className={!isSinglePage ? styles.textContent : styles.singleText} dangerouslySetInnerHTML={{ __html: data.content.html }} ></div>
            </div>
            {!isSinglePage && 
            <div className={styles.callButton}>
                <Link to={`/blog/${data.slug}`} >See more</Link>
            </div>}
            
            <NewCommentaryState>
                {isSinglePage && <LeaveYourComment postId={data.id} />}
                {isSinglePage && <CommentsSection postId={data.id} />}
            </NewCommentaryState>
            
        </div>        
    )
}