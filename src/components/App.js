import React, { useState } from "react";
import Header from "./components/Header";
import Addtask from "./components/Addtask";
import Tasks from "./components/Tasks";

const App = () => {
  const [taskItems, setTaskItems] = useState([
    { id: 1, title: "Wash Dishes", time: "8:30 p.m.", done: false },
    { id: 2, title: "Take out the trash", time: "9 p.m.", done: false },
    { id: 3, title: "Study", time: "10:30 p.m.", done: false },
  ]);

  const addItem = (data) => {
    const randomNum = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id: randomNum, ...data };
    setTaskItems([...taskItems, newTask]);
  };

  const deleteItem = (id) => {
    setTaskItems(taskItems.filter((e) => e.id !== id));
  };

  const toggleDone = (id) => {
    setTaskItems(
      taskItems.map((e) => (e.id === id ? { ...e, done: !e.done } : e))
    );
  };

  return (
    <main className="container">
      <Header />
      <Addtask add={addItem} />
      {taskItems == "" ? (
        <p className="task-container">There are no tasks.</p>
      ) : (
        <Tasks tasks={taskItems} delete={deleteItem} toggle={toggleDone} />
      )}
    </main>
  );
};

export default App;
