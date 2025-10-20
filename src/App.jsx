import { useEffect, useState } from "react";
import Tasks from "./assets/components/Tasks.jsx";
import AddTask from "./assets/components/AddTask.jsx";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );
      const data = await response.json();
      setTasks(data);
    };

    if (tasks.length === 0) {
      fetchTasks();
    }
  });

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Atualizar essa Tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubimit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubimit={onAddTaskSubimit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
