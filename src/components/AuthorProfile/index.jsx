import styles from './styles.module.css'

export default function AuthorProfile({author, postCreatedAt}){
    const createdAt = new Date(postCreatedAt)
    return (
        <div className={styles.author}>
            <img src={author.picture.url} alt={author.name} title={author.name} />
            <div className={styles.informations}>
                <span>Author: {author.name}</span>
                <span>Created at: {createdAt.toLocaleString('pt-BR')}</span>
            </div>
        </div>
    )
}