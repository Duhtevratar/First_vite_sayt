import styles from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
    const reload = () => {
        return window.location.reload()
    }
    return (
        <div>
            <div className={styles.circle}  >
                <img className={styles.img}  src={props.logo} alt="" onClick={reload} />
            </div>
            <nav className={styles.nav}>
                <Link className={styles.nav_item} to="/Home">Home</Link>
                <Link className={styles.nav_item} to="/Dream">Dream</Link>
                <Link className={styles.nav_item} to="/Contact">Contact</Link>
            </nav>
            <div className={styles.logins}>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}
export default Header; 