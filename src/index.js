import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer : data 수정 함수
// 데이터를 유일하게 수정할 수 있는 곳
// return 값은 application의 data가 됨
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// store : date 저장 공간
const coutStore = createStore(countModifier);

// dispatch
coutStore.dispatch({ type: "ADD" });

// vanilla JS로 redux를 사용하지 않고 count의 값 변경
// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
