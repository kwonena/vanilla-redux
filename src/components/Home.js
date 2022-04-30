import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// connect에 연결된 함수로써 store에서 state를 가져와 주는 함수
// state 값은 실제로 store에 있는 state값임
// return값이 필수로 필요함
function mapStateToProps(state) {
  return { toDos: state };
}

// connect() : Home으로 보내는 props에 추가할 수 있도록 허용해줌
// mapStateToProps에서 return한 값이 prop으로 추가됨
export default connect(mapStateToProps)(Home);
