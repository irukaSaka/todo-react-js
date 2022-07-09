import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { CompleteTodos } from "./components/CompleteTodos";
import { InCompleteTodos } from "./components/InCompleteTodos";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (idx) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(idx, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (idx) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(idx, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[idx]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickBack = (idx) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[idx]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(idx, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos onClickBack={onClickBack} todos={completeTodos} />
    </>
  );
};

export default App;
