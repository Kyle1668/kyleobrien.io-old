import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/css/Contact.css";
import CoffeeIcon from "react-icons/lib/io/coffee";

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact">
        <Navbar isFixed={false} />
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="body-heading col-md-12">
                <h1>
                  GET IN TOUCH <CoffeeIcon size={40} />
                </h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="container">
                git
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <div className="paragraph">
                      <p>
                        Interested in getting in touch? I'm always eager to
                        dicuss my experiences and interests!
                      </p>
                    </div>
                    <div className="paragraph">
                      <div className="list-group">
                        <p className="list-group-item list-group-item-action">
                          Email: kyledevinobrien1@gmail.com
                        </p>
                        <p className="list-group-item list-group-item-action">
                          LinkedIn: linkedin.com/in/kyle1668
                        </p>
                        <p className="list-group-item list-group-item-action">
                          Mobile: 707-292-1668
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
