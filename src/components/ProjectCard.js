import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={18} sm={9} md={6}>
      <div className="proj-imgbx">
        <a href={githubUrl}> <img src={imgUrl} alt=""/> </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
