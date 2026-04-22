import api from '../../js/api/api.js';

import { useState, useEffect } from 'react';
import MediaCard from '../../components/atoms/MediaCard/MediaCard.jsx';

export default function Home() {
    const [media, setMedia] = useState([]);

    const {
        getAPIData,
    } = api()

    const trendingMedia = media.map(item =>
        <li>
            <MediaCard
                isTrending='true'
                key={item.id}
                release_date={item.first_air_date || item.release_date}
                poster_path={item.poster_path}
                media_type={item.media_type}
                avg_rating={item.vote_average}
                title={item.title || item.name}
            />
        </li>
    )

    useEffect(() => {
        getAPIData('trending', setMedia);
    }, [])

    console.log(media);

    return (
        <>
            <span>This is the home page</span>
            <ul>{trendingMedia}</ul>
        </>
    )
}