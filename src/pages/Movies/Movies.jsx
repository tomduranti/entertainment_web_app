//functions
import getAPIData from '../../js/api/api.js';

//react libraries and components
import { useState, useEffect } from 'react';
import MediaCard from '../../components/atoms/MediaCard/MediaCard.jsx';

//sass
import styles from './_Movies.module.scss';

export default function Movies() {
    const [latestMovies, setLatestMovies] = useState([]);

    const media = (isTrending) => {
        return latestMovies.map(item =>
            <li key={item.id}>
                <MediaCard
                    isTrending={isTrending}
                    release_date={item.first_air_date || item.release_date}
                    poster_path={item.poster_path}
                    media_type={item.media_type}
                    video={item.video}
                    avg_rating={item.vote_average}
                    title={item.title || item.name}
                />
            </li>
        )
    }

    useEffect(() => {
        getAPIData('latest_movies', setLatestMovies);
    }, [])

    return (
        <>
            <section className={styles.section}>
                <h2 className={`${styles.section__title}  text_preset_1  text_white  text_capitalize`}>movies</h2>

                {latestMovies ? (
                    <div>
                        <ul>
                            {media(false)}
                        </ul>
                    </div>
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}

            </section>
        </>
    )
}