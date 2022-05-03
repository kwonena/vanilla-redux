import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const id = useParams().id;
  // find() : 조건을 만족하는 배열의 첫번째 요소를 반환함
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      {/* Optional Chaining : ?.을 사용해 값이 존재하지 않으면 undefined를 반환함
      기존의 && 연산자와 비슷한 역할을 하며 코드 수를 줄여줌
      toDo?.text는 toDo && toDo.text와 같은 용도로 사용됨 */}
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
export default connect(mapStateToProps)(Detail);
