import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <ul className="p-6 space-y-4 rounded-md shadow bg-slate-200">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <Button
            onClick={() => onTaskClick(task.id)}
            className={`w-full rounded-md bg-slate-400 p-2 text-left text-white ${
              task.isCompleted ? "line-through opacity-60" : ""
            }`}
          >
            {task.title}
          </Button>

          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="p-2 text-white transition rounded-md bg-slate-400 hover:bg-slate-500"
            aria-label={`Ver detalhes da tarefa ${task.title}`}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => onTaskDelete(task.id)}
            className="p-2 text-white transition rounded-md bg-slate-400 hover:bg-slate-500"
            aria-label={`Excluir tarefa ${task.title}`}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
