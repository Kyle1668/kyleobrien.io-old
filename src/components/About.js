import React from "react";

import "../stylesheets/css/About.css";
import profilePic2 from "../images/gitpic.jpeg";

import Navbar from "./Navbar";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      paragraphs: [
        {
          paragraph:
            "Hello! My name is Kyle, and I’m a Junior at University of California, Santa Cruz" +
            ". As a student of Computer Science, I’m fascinated by technology’s impact on dai" +
            "ly life and innovation’s ability to spark societal change. Software Developers a" +
            "re the avant-garde of this movement, and I wish to be amongst their ranks.",
          ordering: 1,
        },
        {
          paragraph:
            "Through my various internships and side projects, I've experienced working acros" +
            "s the entire stack. I'm primarily interested in bridging the gap between softwar" +
            "e engineering and data science. I find the challenge of developing the supportin" +
            "g infrastructure for machine learning models particularly exciting.",
          ordering: 2,
        },
        {
          paragraph:
            "Outside of academics, I'm an avid endurance athlete, foodie, and amateur histori" +
            "an! I love spending time in nature with friends and conversations over beer and " +
            "coffee.",
          ordering: 3,
        },
        {
          paragraph:
            "I am currently on the search for summer internship opportunities in the fields o" +
            "f Software Engineering and Data Science while on summer break between June and m" +
            "id-September 2019. If you're a part of an organization looking into summer inter" +
            "ns, I would like to connect with you.",
          ordering: 4,
        },
        {
          paragraph: "I can be best reached via a linkedin message or at kyledevinobrien1@gmail.com.",
          ordering: 5,
        },
      ],
    };
  }

  componentDidMount() {
    this.getParagraphs();
  }

  getParagraphs = () => {
    const backendPort = process.env.BACKENDPORT || 4000;
    const backendHost = process.env.BACKENDHOST || "127.0.0.1";
    const url = `http://${backendHost}:${backendPort}/api/about`;
    console.log(url);
    console.log(process.env.BACKENDHOST);
    console.log(process.env.BACKENDPORT);

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json.results);
        this.setState({ paragraphs: json.results });
      })
      .catch(() => {
        console.log("API Error");
        return "error";
      });
  };

  renderParagraphs() {
    return this.state.paragraphs.map((data, key) => {
      if (key + 1 <= 5) {
        return (
          <div className="paragraph" key={key}>
            <p>{data.paragraph}</p>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="about">
        <Navbar isFixed={false} />
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="body-heading col-md-12">
                <h1>About Me</h1>
                <img src={profilePic2} />
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="container paragraph-container">
                <div className="row">
                  <div className="col-md-8 offset-md-2">{this.renderParagraphs()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
