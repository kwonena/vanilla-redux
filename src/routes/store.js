import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       // action으로 보내고 싶은 정보가 payload와 함께 보내짐
//       return [...state, { text: action.payload, id: Date.now() }];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// createReducer의 첫번째 인자는 initialState
// switch & case 불필요
// state mutate or new state
// mutate 가능한 이유? redux toolkit과 immer가 자동으로 사용 가능하게끔 만들어줌
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state에 새로운 값을 push해줌
    // push() : 기존 state mutate
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // filter() : 새로운 array return
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
