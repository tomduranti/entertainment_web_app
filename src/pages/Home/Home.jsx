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
import stylesHome from './_Home.module.scss';
import stylesApp from '../../sass/base/_App.module.scss';

import ContentGrid from '../../components/organisms/ContentGrid/ContentGrid.jsx';

export default function Home() {
    const [trending, setTrending] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [recommendedTvSeries, setRecommendedTvSeries] = useState([]);
    const recommendedForYou = [...recommendedMovies, ...recommendedTvSeries];
    const shuffledRecommendedForYou = fisherYatesShuffle(recommendedForYou);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    }, [Autoplay()])

    const media = (isTrending, array) => {
        return array.map(item =>
            <li className={isTrending ? stylesHome['carousel__item'] : stylesApp['grid__item']} key={item.id}>
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
        getAPIData('recommended_movies', setRecommendedMovies);
        getAPIData('recommended_tv_series', setRecommendedTvSeries);
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.plugins().autoplay?.play()
    }, [emblaApi])


    return (
        <>
            <section className={stylesApp.section}>
                <h2 className={`${stylesApp.section__title}  text_preset_1  text_white  text_capitalize`}>trending</h2>
                {trending.length > 0 ? (
                    <div className={stylesHome.carousel}>
                        <div className={stylesHome.carousel__viewport} ref={emblaRef}>
                            <ul className={stylesHome.carousel__container}>
                                {media(true, trending)}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}
            </section>

            <ContentGrid pageName={'Recommended for you'} isTrending={false} array={shuffledRecommendedForYou} />
        </>
    )
}