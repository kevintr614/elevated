import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import BenefitsList from '../../components/BenefitsList/BenefitsList';
import css from './Benefits.module.css';
import Bkg from '../../images/benefits-bkg.png';
import Bkg_2 from '../../images/benefits-bkg-2.svg';

const Benefits = () => {
    const [list] = useState([
        {
            title: 'Education Portal',
            list: [
                'Get Top Hotel Status: Hilton, Marriot, Hyatt...',
                'Get Top Casino Status: MGM, Ceasar Palace...',
                'Get Top Car Rental Status: Herzt, Enterprise, National...',
                'Get Top Airline Status: Delta, United...',
                'Up to 60% off 5-star Hotels and Resorts.',
                'Up to 60% off Car rental.',
                'First Class flights for the price of economy.',
                'Personal credit and Funding.',
                'Business Credit and Funding.',
                'Waive Credit Card annual fees.',
                'Get Credit Card approve without hard inquiry.',
                'Videos DIY Credit Repair. Remove inquiries, late payments, collections...',
                '50+ Legal letter resources.',
                'Real Estate Investing: BRRR, Airbnb atbitrage, Airbnb luxury rental...',
                'Social Media Growth and Monetization. (Instagram)',
                'Youtube chanel automation. (faceless).'
            ]
        },{
            title: 'VIP PASS',
            list: [
                'Access to all exclusive IRL events.',
                'Raffle ticket to our yacht events.',
                'Access to our token-gate Discord.',
                'DIY travel hack.',
                '10% off yacht rental. (12ppl max)',
            ]
        },{
            title: 'FOUNDER PASS',
            list: [
                'Access to all exclusive IRL events  +1. ',
                'Guarantee ticket to our yacht events.',
                'Private Founder Chatroom.',
                'Exclusive support on travel hack.',
                '30% off yacht rental. (24ppl max)',
                'Private Jet charter.',
                'Nightclub, Music Festival table service.',
                'Access to our contact in various industries.',
                'Access to in-house funding team.'
            ]
        },
    ]);

    return(
        <div className={css.container} id="benefits">
            <Container maxWidth="xl" className="container-fluid">
                <img src={Bkg} alt="" className={css.bkg}/>
                <img src={Bkg_2} alt="" className={css.bkg_2}/>
                <Grid container>
                    <Grid xs={12} className="mainTitle text-center">Member <span>Benefits</span></Grid>
                    <Grid xs={12} className={css.spacing}>
                        <Container maxWidth={false} className="container-fluid">
                            <Grid container columnSpacing={7} rowSpacing={0}>
                                {list.map((item, index) =>
                                    <Grid key={index} xs={12} md={4} className={css.card}>
                                        <BenefitsList data={item}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Benefits;