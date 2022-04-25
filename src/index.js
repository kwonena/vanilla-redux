import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// action : reducer와 소통하는 방식
// action type을 변수화 시켜 오류를 쉽게 잡을 수 있게 만듦
// 일반 string 타입은 JS가 오류를 잡지 못함
const ADD = "ADD";
const MINUS = "MINUS";

// reducer : data 수정 함수
// 데이터를 유일하게 수정할 수 있는 곳
// return 값은 application의 data가 됨
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

// store : date 저장 공간
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe : store의 변화를 감지하면 인자 값으로 준 함수를 실행
countStore.subscribe(onChange);

// dispatch : reducer에 action을 보내고 호출함
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
