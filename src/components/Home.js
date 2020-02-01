import React from "react";
import Particles from "react-particles-js";
import Navbar from "./Navbar";
import "../stylesheets/css/Home.css";

class Header extends React.Component {
    constructor() {
        super();
    }

    getParticlesConfig() {
        return {
            params: {
                particles: {
                    number: {
                        value: 60,
                    },
                    color: {
                        value: "#202124",
                    },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 1,
                        },
                    },
                    move: {
                        speed: 1,
                    },
                },
                interactivity: {
                    onhover: {
                        enable: true,
                    },
                },
            },
            style: {
                height: "100%",
                width: "80%",
            },
        };
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Navbar isFixed />
                    <div id="particles">
                        <h1>Kyle O'Brien</h1>
                        <h4>Software Engineer</h4>
                        <br />
                        <div>
                            <p id="header-text">
                                Hi! I'm a computer science undergraduate at UC Santa Cruz. I love to build with and
                                contribute to fast paced inclusive organizations. If you're apart of an organization
                                looking into summer interns, I'd love to connect with you at kyledevinobrien1@gmail.com.
                            </p>
                        </div>
                    </div>
                    <div className="particles-effect">
                        <Particles params={this.getParticlesConfig().params} style={this.getParticlesConfig().style} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
