import React from 'react';
import Accordions from '../Accordions/Accordions';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Accordions></Accordions>
        </div>
    );
};

export default Home;