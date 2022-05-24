import React, { Component } from "react";
import ModalComponent from "./ModalComponent";

export default class ProductItem extends Component {
  render() {
    const { shoes, setStateModal } = this.props;
    return (
      <div className="col-lg-4 mt-4">
        <div className="card">
          <img src={shoes.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{shoes.name}</h5>
            <p className="card-text">Giá bán: {shoes.price}$</p>
            <div
              className="btn btn-primary"
              onClick={() => {
                setStateModal(Math.random(), shoes);
              }}
            >
              Add to cart
            </div>
          </div>
        </div>
      </div>
    );
  }
}
