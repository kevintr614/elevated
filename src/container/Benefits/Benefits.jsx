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
                'Two years access to our travel booking platform. (Up to 75% off retails)',
                'Life-time access to all exclusive IRL events.',
                'One free ticket to our yacht event. ($250 per ticket afterward)',
                'Access to our token-gate Discord.',
                'Life-time access to all exclusive IRL events.',
                'DIY travel hack.',
                '10% off yacht rental. (12ppl max)',
                'Life-time access to our Education Portal.',
            ]
        },{
            title: 'FOUNDER PASS',
            list: [
                'Life-time access to our travel booking platform. (Up to 75% off retails)',
                'Life-time Access to all exclusive IRL events with your +1. ',
                'Guarantee ticket to our yacht events.',
                'Private Founder Chatroom.',
                'Priority support on travel hack.',
                '30% off yacht rental. (24ppl max)',
                'Life-time access to our Education Portal.',
                'Have our team organize yacht events for you, your company or project.',
                'Private Jet charter.',
                'Nightclub, Music Festival table service.',
                'Access to our contact in various industries.',
                'Access to in-house funding team.',
                'Access to our algorith trading bot.',
                'Access to our web3 Consultation Services. For any web2 company or brand wanting to get into web3, we can help. Our consultation services will help you understand this new landscape and how best to navigate it. We will work with you to develop a strategy that takes advantage of the opportunities web3 offers while mitigating the risks.',
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
