import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, des} = service;
    return (
        <div className="service-container">
        <img src={img}  alt="" />
        <div className="service">
        <h2 className="service-title">{name}</h2>
        <p className="service-price">${price}</p>
        <p className="service-description">{des}</p>
       
        </div>
        <button  className="service-btn">Book: {name}</button>
    </div>
    );
};

export default Service;