import React from "react";
import { Accordion } from "react-bootstrap";

const Accordions = () => {
  return (
    <div className="my-5">
        <h1 className="tex-center text-info ">People also ask</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do you handle TV safely?</Accordion.Header>
          <Accordion.Body>
            Secure TVs, Mount flat-panel TVs to the wall, Attach furniture to
            the wall, Use anti-tip brackets, braces or wall straps to secure
            furniture to the wall, Rearrange household items, Store heavy
            objects on lower shelves or in lower drawers,Recycle old TVs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do you properly use AC?</Accordion.Header>
          <Accordion.Body>
            Check and Change the Air Filter,Use Smart Thermostat or AC
            Controllers, Avoid Steep Temperature Changes, Utilize Best
            Thermostat Setting, Create Zones,Keep an Eye on Indoor Humidity,
            Utilize the Fan Mode, Look Out for Debris.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How to use your refrigerator the healthy way?</Accordion.Header>
          <Accordion.Body>
            To maintain the freshness of the food for as long as possible, the
            most important thing to keep in mind is the temperature. The
            temperature for refrigerator should be between 0 to 4 Celsius and
            for the freezer, it should be below 0 Celsius. For storing meat,
            temperature should be -18 degrees Celsius. If the temperature for
            the refrigerator is set below 0 Celsius, then things stand the risk
            of rotting faster.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accordions;
