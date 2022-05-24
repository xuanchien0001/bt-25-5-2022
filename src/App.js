import data from "./data.json";
import "./App.css";
import ModalComponent from "./bt/ModalComponent";
import ProductItem from "./bt/ProductItem";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
  }
  state = {
    stateModal: false,
    giay: {},
  };
  getStateModal = (stateModal, giay) => {
    this.setState({ giay: giay, stateModal: stateModal });
  };
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Shop shoes</h1>
        <div className="container">
          <div className="row">
            {data.map((shoes, index) => {
              return (
                <ProductItem
                  setStateModal={this.getStateModal}
                  shoes={shoes}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <ModalComponent data={this.state} />
      </div>
    );
  }
}
