import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update_product_state,
  update_with_setIndex,
} from "../Redux/inventorySlice";
import "./search.css";
const SearchProduct = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { addProduct } = state.inventory;

  const [update, new_update] = useState({
    Product_name: "",
    Product_description: "",
    Product_price: "",
    Product_quantity: "",
  });

  const { Product_name, Product_description, Product_price, Product_quantity } =
    update;

  const updateProduct = (e) => {
    new_update({ ...update, [e.target.name]: e.target.value });
  };
  const submit_update_product = (e) => {
    e.preventDefault();
    dispatch(update_product_state(update));
    setValue_product(update);
  };

  const [count, setCount] = useState(true);
  const [search_data, new_search_data] = useState({
    search: "",
  });

  const addSearch = (e) => {
    new_search_data({ ...search_data, [e.target.name]: e.target.value });
  };
  const addSearchForm = (e) => {
    e.preventDefault();
    
  };

  var newArray = addProduct.filter(function (el, id) {
    return el.Product_name === search_data.search;
  });

  var result = addProduct
    .filter(function (item) {
      return item.Product_name === search_data.search;
    })
    .map(function (item) {
      return item.id;
    });

  console.log("result", result[0]);
  const setValue_product = () => {
    addProduct.map((element, index) => {
      if (element.id === result[0]) {
        dispatch(update_with_setIndex(index));
      }
    });
  };

  const { search } = search_data;
  return (
    <div>
      <form class="d-flex" onSubmit={(e) => addSearchForm(e)}>
        <input
          class="form-control "
          type="search"
          name="search"
          value={search}
          onChange={(e) => addSearch(e)}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Search
        </button>
      </form>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Search And Edit Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => submit_update_product(e)}>
              <div class="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newArray.map((post, id) => (
                      <tr key={id}>
                        <th scope="row">
                          {" "}
                          <input
                            className="form-control"
                            name="Product_name"
                            value={Product_name}
                            placeholder={post.Product_name}
                            onChange={(e) => updateProduct(e)}
                            disabled={count}
                          />
                        </th>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name="Product_description"
                            value={Product_description}
                            placeholder={post.Product_description}
                            onChange={(e) => updateProduct(e)}
                            disabled={count}
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="number"
                            name="Product_price"
                            value={Product_price}
                            placeholder={post.Product_price}
                            onChange={(e) => updateProduct(e)}
                            disabled={count}
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            name={Product_quantity}
                            placeholder={post.Product_quantity}
                            onChange={(e) => updateProduct(e)}
                            disabled={count}
                          />
                        </td>
                        <td></td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => setCount(false)}
                          >
                            edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setCount(true)}
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
