import { useAuth0 } from "@auth0/auth0-react"
import { FaUserCircle } from 'react-icons/fa';
import styles from './styles.module.css';


export default function SignInButton(){

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    return (
        <div className="login">
            {!isLoading && !user &&(
                <button className={styles.loginButton} onClick={() => loginWithRedirect()}><FaUserCircle />Log In</button>
            )}
            {!isLoading && user &&(
                <button className={styles.logoutButton} onClick={() => logout()}><img src={user.picture} />Log Out</button>
            )}
        </div>
    )
}