import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import BkgImg from '../../images/slider-img-bkg.png';
import Bkg from '../../images/slider-bkg.png';
import css from './Featured.module.css';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';
import Twitch from '../../images/twitch.svg';
import Telegram from '../../images/telegram.svg';
import Ship from '../../images/ship.svg';

const Featured = () => {
    const [icons] = useState([
        {
            title: 'instagram',
            image: Instagram,
            url: 'https://instagram.com/'
        },{
            title: 'twitter',
            image: Twitter,
            url: 'https://twitter.com/'
        },{
            title: 'twitch',
            image: Twitch,
            url: 'https://twitch.com/'
        },{
            title: 'telegram',
            image: Telegram,
            url: 'https://telegram.com/'
        },{
            title: 'opensea',
            image: Ship,
            url: 'https://opensea.io'
        }
    ]);

    return(
        <div id="homepage" className={css.featuredContainer}>
            <img className={css.background} src={BkgImg}/>
            <img className={css.background} src={Bkg}/>
            <div className={css.textContainer}>
                <Container maxWidth="md" className={css.textContent}>
                    <Grid contianer>
                        <Grid xs={12}>
                            <div className={`mainTitle ${css.text}`}><span>Success</span> is just an anchor away</div>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="md" className={css.textContent}>
                    <Grid contianer>
                        <Grid xs={12}>
                            <div className={css.caption}>We take networking events to the next level.</div>
                            <div className={css.caption}>Join Us !</div>
                            <ul className={css.social}>
                                {icons.map((item, index) =>
                                    <li key={index}>
                                        <a target="_blank" rel="noreferrer" href={item.url}><img alt={item.title} src={item.image}/></a>
                                    </li>
                                )}
                            </ul>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </div>
    )
}

export default Featured;