import React, { Component } from "react";

const AppDataContextInstance = React.createContext();

export default class DataContext extends Component {
  state = {};
  render() {
    return (
      <AppDataContextInstance.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppDataContextInstance.Provider>
    );
  }
}
