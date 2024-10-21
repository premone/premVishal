import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import blogmaniac from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogmaniac}
              isBlog={false}
              title="Bubble Trouble"
              description="Bubble Trouble is a mobile app designed for kids, offering them a platform to learn, communicate, and play.
It provides a collection of all essential materials for kids in one safe and secure place."
              ghLink="https://www.behance.net/gallery/131956387/BubbleTrouble-A-complete-app-for-kids-and-parents"
              demoLink="https://blog-maniac-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Indeep Landing Page Redesign"
              description="I chose to redesign Indeed.com, focusing on the job search page, to help job seekers on the platform better organize and streamline their search process."
              ghLink="https://www.behance.net/gallery/210460799/Indeed-Landing-page-Redesign-UXUI"
              demoLink="https://editor-io-rho.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Touch Up"
              description="This app helps you identify the perfect shade for your skin tone, addressing the common challenges many women face when selecting the right shade."
              ghLink="https://www.behance.net/gallery/210460353/TouchUp-Makeup-Suggestion"
            />
          </Col>

          <h2 style={{ fontWeight: "900", color: "white" }}>Team-Project</h2>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Chef Bot"
              description="We believe cooking should be easy, enjoyable, and tailored to your preferences. That’s why we’ve harnessed AI to develop a tool that transforms your kitchen ingredients into tasty meals with just a few taps."
              ghLink="https://www.behance.net/gallery/210459663/AI-Powered-Recipe-Generator-UIUX-Project"
              demoLink="charges-by-tenant-landlord.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
