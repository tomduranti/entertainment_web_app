import stylesApp from '../../../sass/base/_App.module.scss';
import stylesHome from '../../../pages/Home/_Home.module.scss';

import MediaCard from '../../atoms/MediaCard/MediaCard.jsx';

export default function ContentGrid({ pageName, isTrending, array }) {

    return (
        <>
            <section className={stylesApp.section}>
                <h2 className={`${stylesApp.section__title}  text_preset_1  text_white  text_capitalize`}>{pageName}</h2>
                {array ? (
                    <ul className={stylesApp.grid}>
                        {array.map(item =>
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
                        )}
                    </ul>
                ) : (
                    <span className="text_preset_1  text_white--opaque_50">Loading...</span>
                )}
            </section>
        </>
    )
}