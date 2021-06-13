import { createSlice } from "@reduxjs/toolkit";
export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    path: "Home",
    update_product: null,
    index: 0,
    status: "",
    addProduct: [],
  },

  reducers: {
    getLoginData: (state, action) => {
      state.status = "login_success";
      state.path = action.payload;
    },
    set_path: (state, action) => {
        state.path = action.payload;
    },
    afterLogin: (state) => {
      state.status = "false";
    },
    AddProduct_data: (state, action) => {
      state.addProduct.push(action.payload);

      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    },

    update_product_state: (state, action) => {
      state.update_product = action.payload;
    },
    update_with_setIndex: (state, action) => {
      state.addProduct[action.payload].Product_name =
        state.update_product.Product_name;
      state.addProduct[action.payload].Product_description =
        state.update_product.Product_description;
      state.addProduct[action.payload].Product_price =
        state.update_product.Product_price;
      state.addProduct[action.payload].Product_quantity =
        state.update_product.Product_quantity;
    },
  },

  extraReducers: (builder) => {},
});

export const selectCount = (state) => {
  console.log("1010", state);
};

export const {
  getLoginData,
  afterLogin,
  AddProduct_data,
  update_product_state,
  update_with_setIndex,
  set_path
} = inventorySlice.actions;
export default inventorySlice.reducer;
