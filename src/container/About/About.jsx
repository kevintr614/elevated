import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AboutList from '../../components/AboutList/AboutList';
import { Player } from 'video-react';
import css from './About.module.css';
import Bkg from '../../images/about-bkg.svg';
// import Image from '../../images/about.png';
import 'video-react/dist/video-react.css';
import Video from '../../images/EYC_Reel_001.mov';
import Image1 from '../../images/about-01.png';
import Image2 from '../../images/about-02.png';
import Image3 from '../../images/about-03.png';
import ButtonIcon from '../../images/icon-button.png';
import YouTube from 'react-youtube';

const About = () => {
    const [list] = useState([
        {
            title: 'Luxury Travel',
            icon: Image1,
            text: "We help our members get exclusive discounts on travel and yacht charters, as well as access to VIP events and experiences  We have carefully curated a selection of vendors who provide top-quality services at a fraction of the cost. Whether you're looking to explore the world or simply relax in style, we've got you covered.",
        },{
            title: 'Community Driven',
            icon: Image2,
            text: "At Elevated Yacht Club we bring together people who are passionate about web3 technologies and want to learn more about this growing ecosystem. Our members come from all over the world and represent a wide range of backgrounds and expertise. Through our online platform and events, we provide a space for our community to connect, share knowledge, and collaborate on projects.",
        },{
            title: 'Education Portal',
            icon: Image3,
            text: "We strongly believe that education is key to success. By providing our members with the tools and resources they need to succeed, we are helping them build a strong foundation for their future.  We are committed to helping our members reach their full potential, and we will continue to invest in their education and development. ",
        },
    ]);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return(
        <div id="about" className={css.aboutContainer}>
            <img className={css.bkg} src={Bkg} alt=""/>
            <Container maxWidth="xl" className="container-fluid">
                <Grid container columnSpacing={4} rowSpacing={0}>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={`mainTitle ${css.title}`}>What is <span>Elevated Yacht Club</span>?</div>
                        <div className={css.text}>
                            <p>The entrepreneurial journey can be a lonely one specially in web3. That's why it's so important to surround yourself with like-minded individuals who can support and encourage you.</p>
                            <p>If you're looking for a supportive community of fellow entrepreneurs, we invite you to join us. Together, let's turn our big ideas into reality.</p>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={css.video}>
                            <YouTube videoId="DByRK9Ksl24" opts={opts} />
                        </div>
                    </Grid>
                    <Grid xs={12} className={css.spacingTop}>
                        <Container maxWidth={false} className="container-fluid">
                            <Grid container columnSpacing={8} rowSpacing={0}>
                                {list.map((item, index) =>
                                    <Grid key={index} xs={12} md={4} lg={4}>
                                        <AboutList data={item}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid xs={12}>
                        <a target="_blank" rel="noreferrer" href="#" className={`button ${css.button}`}>WHITEPAPER <img src={ButtonIcon} alt=""/></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;