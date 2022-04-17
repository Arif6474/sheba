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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '700px'}}
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/QNcDjPt/ac2-ccexpress.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '700px'}}
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/FhqnTYb/fridge2-ccexpress.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;