// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { products: [], isFetching: true, error: false };
    case "PRODUCT_LIST_SUCCESS":
      return { products: action.payload, isFetching: false, error: false };
    case "PRODUCT_LIST_FAIL":
      return { products: [], isFetching: false, error: true };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE_REQUEST":
      return { isFetching: true, error: false };
    case "PRODUCT_DELETE_SUCCESS":
      return { isFetching: false, success: true };
    case "PRODUCT_DELETE_FAIL":
      return { isFetching: false, error: true };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REQUEST":
      return { isFetching: true };
    case "PRODUCT_CREATE_SUCCESS":
      return { isFetching: false, success: true, product: action.payload };
    case "PRODUCT_CREATE_FAIL":
      return { isFetching: false, error: true };
    case "PRODUCT_CREATE_RESET":
      return {};
    default:
      return state;
  }
};

// EDIT PRODUCT
export const productEditReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case "PRODUCT_EDIT_REQUEST":
      return { ...state, isFetching: true };
    case "PRODUCT_EDIT_SUCCESS":
      return { isFetching: false, product: action.payload };
    case "PRODUCT_EDIT_FAIL":
      return { isFetching: false, error: true };
    default:
      return state;
  }
};

// UPDATE PRODUCT
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_UPDATE_REQUEST":
      return { idFetching: true };
    case "PRODUCT_UPDATE_SUCCESS":
      return { idFetching: false, success: true, product: action.payload };
    case "PRODUCT_UPDATE_FAIL":
      return { idFetching: false, error: true };
    case "PRODUCT_UPDATE_RESET":
      return { product: {} };
    default:
      return state;
  }
};
