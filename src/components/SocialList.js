import React from "react";
import { SocialIcon } from "react-social-icons";

class SocialList extends React.Component {
    constructor() {
        super();
        this.state = {
            socials: [
                "https://www.linkedin.com/in/kyle1668",
                "https://github.com/Kyle1668",
                "https://www.instagram.com/kyle.ob_/?hl=en",
                "https://medium.com/@kyleobrien1668",
            ],
        };
    }

    render() {
        return this.state.socials.map((item, i) => {
            return <SocialIcon url={item} key={i} color="#fff" style={{ height: 25, width: 25, margin: 5 }} />;
        });
    }
}

export default SocialList;
