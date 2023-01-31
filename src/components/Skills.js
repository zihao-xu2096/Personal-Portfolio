import html from "../assets/img/html-logo.svg";
import css from "../assets/img/css-logo.svg";
import javascript from "../assets/img/javascript-logo.svg";
import java from "../assets/img/java-logo.svg";
import python from "../assets/img/python-logo.svg";
import c from "../assets/img/c-logo.svg";
import sql from "../assets/img/sql-logo.svg";

import react from "../assets/img/react-logo.svg";
import angular from "../assets/img/angular-logo.svg";
import flask from "../assets/img/flask-logo.svg";

import github from "../assets/img/Github-logo.svg";
import pycharm from "../assets/img/pycharm-logo.svg";
import vs from "../assets/img/VS-logo.svg";
import intellij from "../assets/img/Intellij-logo.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h5>Cascading Style Sheet</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="" />
                                <h5>Structured Query Language</h5>
                            </div>
                        </Carousel>
                        <p>Programming Languages.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="" />
                                <h5>ReactJS/React Native</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="" />
                                <h5>PostgreSQL</h5>
                            </div>
                        </Carousel>
                        <p>Frameworks.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={github} alt="" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={pycharm} alt="" />
                                <h5>Pycharm IDE</h5>
                            </div>
                            <div className="item">
                                <img src={vs} alt="" />
                                <h5>Visual Studio IDE</h5>
                            </div>
                            <div className="item">
                                <img src={intellij} alt="" />
                                <h5>Intellij IDEA</h5>
                            </div>
                        </Carousel>
                        <p>Developer Tools.<br></br></p>                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
