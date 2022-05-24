import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";

const ModalComponent = ({ data }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(data.stateModal);
  }, [data.stateModal]);

  return (
    <>
      <Modal
        title="Thông tin chi tiết"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={""}
      >
        <div className="card mb-3" style={{ maxWidth: 960 }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="w-100" src={data.giay.image} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Tên</th>
                      <th scope="col">{data.giay.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Giá bán</th>
                      <td>{data.giay.price}$</td>
                    </tr>
                    <tr>
                      <th scope="row">Kho hàng</th>
                      <td>{data.giay.quantity}</td>
                    </tr>
                    <tr>
                      <th scope="row">Mô Tả</th>
                      <td>{data.giay.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
