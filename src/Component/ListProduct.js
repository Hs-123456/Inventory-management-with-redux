import React, { useState, useEffect } from "react";
import Allproduct from "./Allproduct";
import { AddProduct_data } from "../Redux/inventorySlice";
import { useDispatch } from "react-redux";
import SearchProduct from "./SearchProduct";
import FilterProduct from "./FilterProduct";
const ListProduct = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: Number,
    Product_name: "",
    Product_description: "",
    Product_price: "",
    Product_quantity: "",
    Image_url: "",
  });
  const [count, setCount] = useState({
    status: "",
  });

  const setRandom = () => {
    setData({ id: Math.floor(Math.random() * (1000 - 100)) + 100 });
  };

  const {
    Product_name,
    Product_description,
    Product_price,
    Product_quantity,
    Image_url,
  } = data;

  const addProduct = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addProduct_form = (e) => {
    e.preventDefault();

    const price = parseInt(data.Product_price);
    const quantity = parseInt(data.Product_quantity);

    if (price == data.Product_price) {
      setCount({ status: "Price not Decimal" });
    } else {
      if (quantity == data.Product_quantity) {
        dispatch(AddProduct_data(data));
        setState("Add Product Successfully");
        setCount({ status: " " });
      } else {
        setCount({ status: "Quantity not Number" });
      }
    }
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#listProduct"
              onClick={() => setRandom()}
            >
              Add Product
            </button>
          </div>
          <div class="col-lg-6">
            <FilterProduct />
          </div>

          <div class="col col-lg-3">
            <SearchProduct />
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="listProduct"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {state === "Add Product Successfully" ? (
                  <p class="text-success">Add Product Successfully</p>
                ) : (
                  "Add Product"
                )}
              </h5>
            </div>
            <div class="modal-body">
              <form onSubmit={(e) => addProduct_form(e)}>
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product name"
                  name="Product_name"
                  value={Product_name}
                  onChange={(e) => addProduct(e)}
                />
                <label class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Description"
                  name="Product_description"
                  value={Product_description}
                  onChange={(e) => addProduct(e)}
                />
                <label class="form-label">
                  {count.status === "Price not Decimal" ? (
                    <p class="text-danger">Price not Decimal</p>
                  ) : count.status !== "Price not Decimal" ? (
                    "Price"
                  ) : null}
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Price in Decimal Format Required"
                  name="Product_price"
                  value={Product_price}
                  onChange={(e) => addProduct(e)}
                />
                <label class="form-label">
                  {count.status === "Quantity not Number" ? (
                    <p class="text-danger">Quantity Not A Number</p>
                  ) : count.status !== "Quantity not Number" ? (
                    "Quantity"
                  ) : null}
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Price in Number Format Required"
                  name="Product_quantity"
                  value={Product_quantity}
                  onChange={(e) => addProduct(e)}
                />
                <label class="form-label">Image Url</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Image URL"
                  name="Image_url"
                  value={Image_url}
                  onChange={(e) => addProduct(e)}
                />
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setState(" ")}
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Allproduct />
    </div>
  );
};

export default ListProduct;
