import styles from './styles.module.css';
import postImage from '../../assets/banner-background.jpg';

export default function Post(data){
    return (
        <div className={styles.postContent} key={data.data.id}>

            <img src={data.data.coverImage.url} alt="data.data.title" />

            <h3>{data.data.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.data.content.html }} ></div>
            <div class={styles.callButton}>
                <a href="#" >See more</a>
            </div>
        </div>        
    )
}