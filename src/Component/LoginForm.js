import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoginData,set_path } from "../Redux/inventorySlice";

import Alert from "../Component/Alert";
import "./login.css";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [auth_data, new_auth_data] = useState({
    email: "",
    password: "",
  });

  useEffect(() =>{
      dispatch(set_path('Home'))
  },[])
  const { email, password } = auth_data;
  const handle_auth = (e) => {
    new_auth_data({ ...auth_data, [e.target.name]: e.target.value });
  };

  const submit_login = (e) => {
    e.preventDefault();
    console.log(auth_data);
    dispatch(getLoginData('Logout'));
    new_auth_data({
      email: "",
      password: "",
    });
  };

  const data = useSelector((state) => state.inventory);
  if (data.status === "login_success") {
    return <Alert />;
  }

  return (
    <div>
      <div id="login">
    
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <form
                  id="login-form"
                  class="form"
                  onSubmit={(e) => submit_login(e)}
                >
                  <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label for="username" class="text-info">
                      Email
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required="true"
                      onChange={(e) => handle_auth(e)}
                      id="email"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password" class="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      required="true"
                      value={password}
                      onChange={(e) => handle_auth(e)}
                      id="password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
