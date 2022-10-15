import React from 'react';
import Featured from '../Featured/Featured';
import About from '../About/About';
import Membership from '../Membership/Membership';
import Benefits from '../Benefits/Benefits';
import Fleets from '../Fleets/Fleets';
import Teams from '../Teams/Teams';
import Faq from '../Faq/Faq';

const Homepage = () => {
    return(
        <>
            <Featured/>
            <About/>
            <Membership/>
            <Benefits/>
            <Fleets/>
            <Teams/>
            <Faq/>
        </>
    )
}

export default Homepage;