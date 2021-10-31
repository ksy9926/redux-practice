import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

number.innerText = 0;

// reducer(state, action)
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store(반드시 reducer를 가지고 있어야 함)
const countStore = createStore(countModifier);

// dispatch(action을 store로 보냄)
// action은 반드시 object이어야 하며 key는 반드시 type이어야 한다.
// countStore.dispatch({ type: ADD });

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

countStore.subscribe(onChange);
