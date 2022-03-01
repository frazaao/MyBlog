import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import AuthorProfile from '../AuthorProfile'
import LeaveYourComment from '../LeaveYourComment';

export default function SinglePost({data, isSinglePage}){

    return (
        <div className={styles.postContent} key={data.id}>

            <img src={data.coverImage.url} alt={data.title} />

            <h3>{data.title}</h3>

            {isSinglePage && <AuthorProfile author={data.author} postCreatedAt={data.createdAt} />}

            <div className={isSinglePage ? styles.singleText : styles.textContainer}>
                <div className={!isSinglePage ? styles.textContent : undefined} dangerouslySetInnerHTML={{ __html: data.content.html }} ></div>
            </div>
            <div className={isSinglePage ? styles.disabled : styles.callButton}>
                <Link to={`/blog/${data.slug}`} >See more</Link>
            </div>

            {isSinglePage && <LeaveYourComment postId={data.id} />}
            
        </div>        
    )
}