import { useState } from "react";
import Talks from "./assets/components/Tasks.jsx";
import AddTask from "./assets/components/AddTask.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudando React",
      description:
        "Estudar React, TailwindCSS e NodeJS para me tornar um desenvolvedor front-end",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudando Java",
      description:
        "Estudar Java, Spring Boot, Valitadion, Hibernate, JPA, Security, Sprig Web e Testes para me tornar um desenvolvedor back-end",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudando Docker",
      description:
        "Estudar Docker, Kubernetes, AWS, Azure e Google Cloud para me tornar um desenvolvedor DevOps",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Atualizar ess Tarefa
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
      id: tasks.length + 1,
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
        <AddTask />
        <Talks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
          onAddTaskSubimit={onAddTaskSubimit}
        />
      </div>
    </div>
  );
}

export default App;
