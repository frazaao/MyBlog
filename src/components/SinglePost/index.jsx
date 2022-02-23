import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function SinglePost({data, isSinglePage}){
    return (
        <div className={styles.postContent} key={data.id}>

            <img src={data.coverImage.url} alt={data.title} />

            <h3>{data.title}</h3>

            <div className={isSinglePage ? styles.singleText : styles.textContainer}>
                <div className={isSinglePage ? styles.singleText : styles.textContent} dangerouslySetInnerHTML={{ __html: data.content.html }} ></div>
            </div>
            <div className={isSinglePage ? styles.disabled : styles.callButton}>
                <Link to={`/blog/${data.slug}`} >See more</Link>
            </div>
        </div>        
    )
}