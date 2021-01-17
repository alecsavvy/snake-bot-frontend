import { createStore } from "redux";

const initialState = {
  commands: [],
  customCommands: [],
  account: {},
  loggedIn: false,
  bot: {
    client: null,
    connected: false,
  },
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
