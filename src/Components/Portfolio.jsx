/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/flower.jpg";

const imageAltText = "Flower";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Portfolio Website 🎉",
    description:
      "This website is my personel portfolio website created using basic HTML, Tailwind css and node.Js",
    url: "https://imsachin010.github.io/Sachin_Portfolio/",
  },
  {
    title: "Annacode Farmers Hub",
    description:
      "The farmer engaged in farming and living in villages don't have affordable and best crop selection strategies and the proper value of their products due to improper reach to the market.",
    url: "https://anna-code.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Visit my resume for best employee to hire, for your company!!.",
    url: "https://drive.google.com/file/d/1vf4qA1Ez_P97MmZTne5sKdKVgNWBjQtA/view?usp=drive_link",
  },
  {
    title: "Samriddhi",
    description:
      "Samridhhi For One Smile : Samridhhi is a platform where we manage the food wastage by the help of our volunteers.",
    url: "https://the-technocrates.github.io/Samriddhi/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
