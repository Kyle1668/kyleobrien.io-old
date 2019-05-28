import React, { Component } from "react";
import articles from "../data/articles.json";

const AppDataContextInstance = React.createContext();

export default class DataContext extends Component {
  state = {
    articles: articles.records
  };
  render() {
    return (
      <AppDataContextInstance.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppDataContextInstance.Provider>
    );
  }
}
