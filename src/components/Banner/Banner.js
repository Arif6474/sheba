import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img style={{height: '700px'}}
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/C0YC2R9/tv2-ccexpress.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '700px'}}
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/QNcDjPt/ac2-ccexpress.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '700px'}}
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/FhqnTYb/fridge2-ccexpress.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;