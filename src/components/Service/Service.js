import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, price, des} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail =(id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="service-container">
        <img src={img}  alt="" />
        <div className="service">
        <h2 className="service-title mt-2">{name}</h2>
        <p className="service-price">${price}</p>
        <p className="service-description">{des.slice(0,150)}...</p>
       
        </div>
        <button onClick={() => navigateToServiceDetail (id)}  className="service-btn">{name}</button>
    </div>
    );
};

export default Service;