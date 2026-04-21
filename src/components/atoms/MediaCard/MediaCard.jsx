import styles from './_MediaCard.module.scss';

import BookmarkItem from '../BookmarkItem/BookmarkItem.jsx';
import movie from '../../../assets/category/category_movie.svg';

export default function MediaCard() {
    return (
        <>
            {/* {isTrending ?
                (
                    <article className={styles.mediacard_trending}>
                        <div className={styles.mediacard_trending__container}>
                            <BookmarkItem />
                            <div className={styles.mediacard__media_info}>
                                <div className={`${styles.mediacard__media_date_and_type}  text_preset_5  text_white--opaque_75`}>
                                    <span>2019</span>
                                    <div className={styles.mediacard__media_category}>
                                        <img src={movie} alt='' />
                                        <span>Movie</span>
                                    </div>
                                    <span className='text_uppercase'>pg</span>
                                </div>
                                <h3 className={`${styles.mediacard__media_title}  text_preset_3  text_white  text_capitalize`}>beyond earth</h3>
                            </div>
                        </div>
                    </article>
                ) : (
                    <article className={styles.mediacard}></article>
                )
            } */}

            <article className={styles.mediacard_trending}>
                <div className={styles.mediacard_trending__container}>
                    <BookmarkItem />
                    <div className={styles.mediacard__media_info}>
                        <div className={`${styles.mediacard__media_date_and_type}  text_preset_5  text_white--opaque_75`}>
                            <span>2019</span>
                            <div className={styles.mediacard__media_category}>
                                <img src={movie} alt='' />
                                <span>Movie</span>
                            </div>
                            <span className='text_uppercase'>pg</span>
                        </div>
                        <h3 className={`${styles.mediacard__media_title}  text_preset_3  text_white  text_capitalize`}>beyond earth</h3>
                    </div>
                </div>
            </article>
        </>
    )
}