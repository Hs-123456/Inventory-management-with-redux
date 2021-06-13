import React from "react";
import { useDispatch } from "react-redux";
import { afterLogin } from "../Redux/inventorySlice";
import { useHistory } from "react-router-dom";
const Alert = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  setTimeout(() => {
    dispatch(afterLogin());
    history.push("/list_product");
  }, 1000);
  return (
    <div>
      <div class="alert alert-success" role="alert">
        Login successfully
      </div>
    </div>
  );
};

export default Alert;
