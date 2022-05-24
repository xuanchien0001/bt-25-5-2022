import React, { Component } from "react";
import ModalComponent from "./ModalComponent";
import ProductList from "./ProductList";

export default class ShoesStore extends Component {
  render() {
    return (
      <div className="container">
        <ProductList></ProductList>
      </div>
    );
  }
}
