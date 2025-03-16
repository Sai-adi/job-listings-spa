import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }} className="p-3 shadow-lg">
        <h3 className="text-center">Todo List</h3>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </Card>
    </Container>
  );
};

export default App;
