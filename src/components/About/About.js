import React from 'react';
import { Card } from 'react-bootstrap';
import mypic from '../../images/mypic.jpg'
import './About.css'
const About = () => {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mt-4 goal">
  <Card.Img variant="top" src={mypic} />
  <Card.Body>
    <Card.Title className="text-center text-info">Md Ariful Islam</Card.Title>
    <Card.Text className="text-secondary">
      I want to be a front-end developer. For that , I am working hard and constantly learning. I want to learn more and more to be expert on programming. Insha-allah  I will success. 
    </Card.Text>
    
  </Card.Body>
</Card>
    );
};

export default About;