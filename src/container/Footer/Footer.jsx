import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import css from './Footer.module.css';
import Logo from '../../images/logo.png';
import Arrow from '../../images/submit.svg';
import Facebook from '../../images/facebook.svg';
import Youtube from '../../images/youtube.svg';
import Twitter from '../../images/twitter-2.svg';
import LinkedIn from '../../images/linkedin.svg';
import Instagram from '../../images/instagram-2.svg';
import Bkg from '../../images/footer-bkg.svg';

const Footer = () => {
    const [value, setValue] = useState('');
    const [social] = useState([
        {
            title: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com'
        },{
            title: 'Youtube',
            icon: Youtube,
            url: 'https://youtube.com'
        },{
            title: 'Twitter',
            icon: Twitter,
            url: 'https://twitter.com'
        },{
            title: 'LinkedIn',
            icon: LinkedIn,
            url: 'https://linkedin.com'
        },{
            title: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com'
        }
    ]);

    return(
        <div className={css.container}>
            <img src={Bkg} alt="" className={css.bkg}/>
            <Container maxWidth="xl" className="container-fluid">
                <Grid container>
                    <Grid xs={12}>
                        <div className={css.logo}>
                            <img src={Logo} alt="logo"/>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={css.subscribe}>
                            <input className={css.email} type="email" value={value} name="email" placeholder="Your Email" onChange={(e)=>setValue(e.target.value)}/>
                            <button className={css.button}>
                                <img src={Arrow} alt="Submit" title="Submit"/>
                            </button>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <ul className={css.menu}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Partnerships</a></li>
                            <li><a href="#">Membership</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </Grid>
                    <Grid xs={12} className={css.social}>
                        <SocialIcons social={social}/>
                    </Grid>
                    <Grid xs={12}>
                        <div className={css.copyright}>
                            Copyright @ 2022 Elevated Yacht Club
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;
