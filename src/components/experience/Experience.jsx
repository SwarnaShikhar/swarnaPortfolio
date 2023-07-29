import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full,DiJavascript,DiReact,DiNodejsSmall,DiBootstrap,DiMysql,DiMongodb } from "react-icons/di";
import { FaJava, FaPhp, FaWordpress } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaJava className="experience__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <DiNodejsSmall className="experience__details-icon" />
              <h4>NodeJs</h4>
            </article>
            <article className="experience__details">
              < FaPhp className="experience__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="experience__details">
              < FaWordpress className="experience__details-icon" />
              <h4>WordPress</h4>
            </article>
            <article className="experience__details">
              <DiJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <DiMysql className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              < SiExpress className="experience__details-icon" />
              <h4>Express</h4>
            </article>
          <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3Full className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiBootstrap className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience