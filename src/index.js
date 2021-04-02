import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(`Statechangeed`, store.getState());
});

console.clear();

setTimeout(() => {
  store.dispatch({
    type: "add_todo",
    payload: {
      title: "Eat Break Fast",
    },
  });
}, 5000);

setTimeout(() => {
  store.dispatch({
    type: "update_todo",
    payload: {
      id: 2,
      title: "Do warm up for mind using the play favorite game of yours",
    },
  });
}, 8000);
