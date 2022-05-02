import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../routes/store.js";
import ToDo from "./ToDo.js";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// connect에 연결된 함수로써 store에서 state를 가져와 주는 함수
// state 값은 실제로 store에 있는 state값임
// return값이 필수로 필요함
function mapStateToProps(state) {
  return { toDos: state };
}

// addToDo 함수가 실행되면 dispatch를 호출
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// connect() : Home으로 보내는 props에 추가할 수 있도록 허용해줌
// mapStateToProps에서 return한 값이 prop으로 추가됨
// state와 dispatch에 관련된 함수를 인자로 가지며 값이 없을 경우 null로 써주는 것이 가능
export default connect(mapStateToProps, mapDispatchToProps)(Home);
