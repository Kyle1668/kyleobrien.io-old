import React from "react";
import SocialList from "./SocialList";
import "../stylesheets/css/Navbar.css";
import resume from "../assets/kyle-obrien-resume.pdf";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFixed: this.props.isFixed,
      navs: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "about",
        },
        {
          name: "Articles",
          path: "articles",
        },
        {
          name: "Resume",
          path: resume,
        },
        {
          name: "Contact",
          path: "contact",
        },
      ],
    };
  }

  getNavs() {
    return this.state.navs.map((item, i) => {
      return (
        <li className="nav-item">
          <a className="nav-link" href={item.path} key={i}>
            {item.name}
          </a>
        </li>
      );
    });
  }

  isFixed() {
    return this.state.isFixed ? "fixed-top" : "";
  }

  render() {
    return (
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${this.isFixed()}`}>
        <div className="container">
          <SocialList />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">{this.getNavs()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
