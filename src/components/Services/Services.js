import React from 'react';
import useServicing from '../../hooks/useServicing';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [servicing] = useServicing()
    return (
        <div >
            <h2  className="title"> My Services</h2>
        <div className="services-container">
            {
                servicing.map(service=> <Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;