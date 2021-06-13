import React, { useState } from "react";
import { useSelector } from "react-redux";
const FilterProduct = () => {
  const state = useSelector((state) => state);
  const { addProduct } = state.inventory;
  const [data, setdata] = useState({
    price_of_product: "",
    quantity: "",
  });
  const { price_of_product, quantity } = data;
  const handle_data = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const filter_data = (e) => {
    e.preventDefault();
  };

  const newArray = addProduct.filter(
    (obj) =>
      obj.Product_price < data.price_of_product &&
      obj.Product_quantity > data.quantity
  );
  return (
    <div>
      <form onSubmit={(e) => filter_data(e)}>
        <div className="d-flex">
          <div>
            <input
              className="form-control"
              type="number"
              name="price_of_product"
              value={price_of_product}
              required="true"
              onChange={(e) => handle_data(e)}
              placeholder="Enter Price of product"
            />
          </div>
          <div>
            <input
              className="form-control"
              type="number"
              name="quantity"
              value={quantity}
              required="true"
              onChange={(e) => handle_data(e)}
              placeholder="Enter Quantity"
            />
          </div>
          <div>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#filter_product"
            >
              Filter
            </button>
          </div>
        </div>
      </form>

      <div
        class="modal fade"
        id="filter_product"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Filter Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                  {newArray.map((post) => (
                    <tr>
                      <td>{post.Product_name}</td>
                      <td>{post.Product_description}</td>
                      <td>{post.Product_price}</td>
                      <td>{post.Product_quantity}</td>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
