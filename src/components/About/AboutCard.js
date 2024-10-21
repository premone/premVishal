import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prem Vishal </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a UI / UX Designer pursuing B.Des in FNLA 
             in NIFT Patna
            <br />
            <br />
            Apart from Designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ESports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To do your best work, you have to love what you do. If you haven’t found that passion yet, keep searching—don’t settle. When you find it, you’ll know, and over time, it will only grow stronger and more fulfilling, just like a great relationship."{"Prem"}
          </p>
          <footer className="blockquote-footer">Prem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
