import styles from './_MediaCard.module.scss';
import '../../../sass/abstract/_utils.scss';

import BookmarkItem from '../BookmarkItem/BookmarkItem.jsx';
import movie from '../../../assets/category/category_movie.svg';
import tv from '../../../assets/category/category_tv.svg';

import date from '../../../js/utils/date/date.js';

export default function MediaCard({ isTrending, key, release_date, poster_path, media_type, avg_rating, title }) {
    
    const {
        getYearFormat,
    } = date()

    return (
        <>
            {isTrending ?
                (
                    <article className={`${styles.mediacard}  ${styles['mediacard--trending']}`} key={key}>
                        <div className={styles.mediacard__container} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>
                            <BookmarkItem className={`${styles.mediacard__button}`} />
                            <div className={styles.mediacard__media_info}>
                                <div className={`${styles.mediacard__media_date_and_type}  text_preset_5  text_white--opaque_75`}>
                                    <span className={`${styles.separator}  ${styles['separator--trending']}`}>{getYearFormat(release_date)}</span>
                                    <div className={`${styles.mediacard__media_category}  ${styles['separator']}  ${styles['separator--trending']}`}>
                                        <img src={media_type === 'movie' ? {movie} : {tv}} alt='' />
                                        <span className='text_capitalize'>{media_type}</span>
                                    </div>
                                    <span className='text_uppercase'>{avg_rating.toFixed(1)}</span>
                                </div>
                                <h3 className={`text_preset_3   text_white   text_capitalize`}>{title}</h3>
                            </div>
                        </div>
                    </article>
                ) : (
                    <article className={styles.mediacard} key={key}>
                        <div className={`${styles.mediacard__container}`}>
                            <BookmarkItem className={`${styles.mediacard__button}  ${styles['mediacard__button--untrending']}`} />
                        </div>

                        <div className={`${styles.mediacard__media_info}  ${styles.mediacard__text_outside}`}>
                            <div className={`${styles.mediacard__media_date_and_type}  text_preset_6  text_white--opaque_75`}>
                                <span className={styles.separator}>2019</span>
                                <div className={`${styles.mediacard__media_category}  ${styles['separator']}`}>
                                    <img src={movie} alt='' />
                                    <span className='text_capitalize'>movie</span>
                                </div>
                                <span className={`${styles.separator}  text_uppercase`}>pg</span>
                            </div>
                            <h3 className='text_uppercase'>beyond earth</h3>
                        </div>
                    </article>
                )
            }
        </>
    )
}