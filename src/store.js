import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          data: action.payload
        };
      default:
        return state;
    }
  };

export default createStore(reducer,{ data: '' });