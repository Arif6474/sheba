import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
           <h2>This is a service detail: {serviceId}</h2>
      <div className="text-center my-4">
        <Link to="/checkout">
          <button className="btn btn-info">Checkout</button>
        </Link>
      </div>
        </div>
    );
};

export default ServiceDetail;