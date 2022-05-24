import React, { Component } from "react";
import ProductItem from "./ProductItem";
import data from "../data.json";
import ModalComponent from "./ModalComponent";

export default class ProductList extends Component {
  getdata = (data) => {
    console.log(data);
  };
  render() {
    return <div className="row"></div>;
  }
}
