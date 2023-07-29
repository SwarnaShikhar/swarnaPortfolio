import React from "react";
import IMG0 from "../../assets/pwa.png";
import IMG2 from "../../assets/advice.png";
import IMG3 from "../../assets/tic.png";
import IMG1 from "../../assets/shreya.png";
import IMG5 from "../../assets/camp.png";
import IMG6 from "../../assets/location.png"
import IMG7 from "../../assets/moto.png"
import IMG8 from "../../assets/wordp.png"
import IMG9 from "../../assets/voting.png"

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 7,
      title: "Location Finder",
      img: IMG6,
      description:
        "Search and Track Locations",
      technologies: "MapBox | Html-CSS-Javacript",
      link: "https://location-check.netlify.app/",
      github: "https://github.com/SwarnaShikhar/Location-Finder",
    },
    {
      id: 2,
      title: "PWA Weather Report app",
      img: IMG0,
      description:
        "PWAs are web apps that use service workers, manifests, and other web-platform features in combination.",
      technologies: "React | API",
      link: "https://swarna-weather-report.netlify.app/",
      github: "https://github.com/SwarnaShikhar/weather-report",
    },
    {
      id: 3,
      title: "React Advice App",
      img: IMG2,
      description: "This site is a kind of motivational one, give you genuine advice.",
      technologies: "React | JavaScript",
      link: "https://golden-advice.netlify.app/",
      github: "https://github.com/SwarnaShikhar/golden-advice",
    },
    {
      id: 8,
      title: "Voting App",
      img: IMG9,
      description: "A simple Online Voting App",
      technologies: "PHP | MySQL | HTML | CSS",
      link: "http://phpvoting.infinityfreeapp.com/",
      github: "https://github.com/SwarnaShikhar/voting-app",
    },
    {
      id: 5,
      title: "MOTO-API",
      img: IMG7,
      description: "Gives you information about bikes accross India",
      technologies: "JavaScript | NodeJs | Express | MongoDb",
      link: "https://real-lime-hare-tie.cyclic.app/api/products",
      github: "https://github.com/SwarnaShikhar/MOTO-API",
    },
    {
      id: 5,
      title: "Multiplayer Tic-Tac-Toe Game",
      img: IMG3,
      description:
        "A Tic-tac-toe game where users can authenticate and play in real time",
      technologies: "JavaScript | React | NodeJs | Express ",
      link: "https://storied-seahorse-ca1509.netlify.app/",
      github: "https://github.com/SwarnaShikhar/Multiplayer-tic-tac-toe",
    },
    {
      id: 6,
      title: "YelpCamp Project",
      img: IMG5,
      description:
        "A fully organised camping website",
      technologies: "Html-CSS-Bootstrap | JavaScript-nodeJs-Express | MongoDb",
      link: "https://storied-seahorse-ca1509.netlify.app/",
      github: "https://github.com/SwarnaShikhar/camp",
    },
    {
      id: 1,
      title: "Client's Portfolio",
      img: IMG1,
      description:
        "Made a pure Javascript based portfolio from scratch for my client",
      technologies: "Javascript | jquery",
      link: "https://shreyaroy.works/",
      github: "https://github.com/SwarnaShikhar/shreya-again",
    },
    {
      id: 4,
      title: "WordPress Website",
      img: IMG8,
      description: "A Wordpress website ",
      technologies: "Wordpress | Elementor | Phlox",
      link: "http://swarnashikhardas.great-site.net/",
      // github: "https://github.com/SwarnaShikhar/golden-advice",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
