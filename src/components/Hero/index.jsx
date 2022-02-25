import styles from './styles.module.css';
import bannerBackground from '../../assets/banner-background.jpg'

export default function Hero(){
    return(
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h2>
                        <span>GeekPlace</span> is your <br />perfect place to <span>know</span>
                    </h2>
                    <p>
                        about news in <span>Geek World</span>
                    </p>
                </div>                
            </div>
        </>
    )
}