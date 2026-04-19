import styles from './_NavBar.module.scss';

import logo from '../../../assets/logo/logo.svg';
import home from '../../../assets/nav/nav_home.svg';
import movies from '../../../assets/nav/nav_movies.svg';
import tv_series from '../../../assets/nav/nav_tv_series.svg';
import bookmark from '../../../assets/nav/nav_bookmark.svg';
import avatar from '../../../assets/avatar/avatar.png';

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.navbar__logo} src={logo} alt='logo' />
            <nav className={styles.navbar__links}>

                {/* TODO: use react NavLink */}
                
                <img className={styles.navbar__link} src={home} alt='link to home page' />
                <img className={styles.navbar__link} src={movies} alt='link to movies page' />
                <img className={styles.navbar__link} src={tv_series} alt='link to tv series page' />
                <img className={styles.navbar__link} src={bookmark} alt='link to bookmarked items page' />
            </nav>
            <img className={styles.navbar__avatar} src={avatar} alt='profile picture' />
        </div>
    )
}