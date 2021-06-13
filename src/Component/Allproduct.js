import React from "react";
import { useSelector } from "react-redux";
const Allproduct = () => {
  const data = useSelector((state) => state);
  const { addProduct } = data.inventory;

  return (
    <div>
      <div class="container">
        <div class="row">
          {addProduct.map((post) => (
            <div class="col">
              <div
                class="card"
                style={{
                  width: "18rem",
                  marginBottom: "20px",
                  marginBlockStart: "20px",
                }}
              >
                <img src={`${post.Image_url}`} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{post.Product_name}</h5>
                  <p class="card-text">{post.Product_description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Product Price <bold>{post.Product_price}</bold>
                  </li>
                  <li class="list-group-item">
                    Product Quantity <bold> {post.Product_quantity}</bold>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
