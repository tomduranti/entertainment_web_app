//functions
import getAPIData from '../../js/api/api.js';
import fisherYatesShuffle from '../../js/utils/shuffle/shuffle.js';

//react libraries and components
import { useState, useEffect } from 'react';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import MediaCard from '../../components/atoms/MediaCard/MediaCard.jsx';

//sass
import styles from './_Home.module.scss';

export default function Home() {
    const [trending, setTrending] = useState([]);
    const [movies, setMovies] = useState({ recommended: [], latest: [] });
    const [tvSeries, setTvSeries] = useState({ recommended: [], latest: [] });
    const recommendedForYou = [...movies.recommended, ...tvSeries.recommended];
    const shuffledRecommendedForYou = fisherYatesShuffle(recommendedForYou);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    }, [Autoplay()])

    const media = (isTrending, array) => {
        return array.map(item =>
            <li className={isTrending ? styles['carousel__item'] : styles['grid__item']} key={item.id}>
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
        getAPIData('trending', setTrending);
        getAPIData('recommended_movies', (data) => {
            setMovies(items => ({ ...items, recommended: data }))
        });
        getAPIData('recommended_tv_series', (data) => {
            setTvSeries(items => ({ ...items, recommended: data }))
        });
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])


    return (
        <>
            <section className={styles.section}>
                <h2 className={`${styles.section__title}  text_preset_1  text_white`}>Trending</h2>

                {trending.length > 0 ? (
                    <div className={styles.carousel}>
                        <div className={styles.carousel__viewport} ref={emblaRef}>
                            <ul className={styles.carousel__container}>
                                {media(true, trending)}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}

            </section>

            <section>
                <h2 className={`${styles.section__title}  text_preset_1  text_white`}>Recommended for you</h2>

                {recommendedForYou.length > 0 ? (
                    <ul className={styles.grid}>
                        {media(false, shuffledRecommendedForYou)}
                    </ul>
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}

            </section>
        </>
    )
}