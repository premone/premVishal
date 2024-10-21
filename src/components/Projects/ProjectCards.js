import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";


function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ position: "relative" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", height: "250px" }}>
          {props.description}
        </Card.Text>
        <div
          className="card-btns"
          style={{
            position: "absolute",
            height: "50px",
            width: "100%",
            bottom: "0px",
            left: "0%",
          }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsBehance /> &nbsp;
            {props.isBlog ? "Blog" : "Behance"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
