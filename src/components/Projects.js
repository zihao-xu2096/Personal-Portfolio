import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/livestreamlytics.PNG";
import projImg2 from "../assets/img/portfolio.PNG";
import projImg3 from "../assets/img/cupetv2.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const livestreamlytics = [
    {
      title: "Web Application",
      description: "React + Flask + PostgreSQL",
      imgUrl: projImg1,
      githubUrl: "https://github.com/zihao-xu2096/ChatScrappingBot",
    }
  ];

  const portfolio = [
    {
      title: "Portfolio Website",
      description: "ReactJS",
      imgUrl: projImg2,
      githubUrl: "https://github.com/zihao-xu2096/Personal-Portfolio",
    }
  ];

  const cupet = [
    {
      title: "Mobile Application",
      description: "Android Studio",
      imgUrl: projImg3,
      githubUrl: "https://github.com/CSC207-UofT/cupet-frontend",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">LivestreamLytics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Portfolio Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cupet</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp"className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" >
                      <a href="https://github.com/zihao-xu2096/ChatScrappingBot"><Row>
                        {
                          livestreamlytics.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <a href="https://github.com/zihao-xu2096/Personal-Portfolio"><Row>
                        {
                          portfolio.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <a href="https://github.com/CSC207-UofT/cupet-frontend"><Row>
                        {
                          cupet.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
