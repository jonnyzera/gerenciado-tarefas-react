import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Talks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <ul className="p-6 space-y-4 rounded-md shadow bg-slate-200">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full rounded-md bg-slate-400 p-2 text-left text-white ${
              task.isCompleted ? "line-through opacity-60" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="p-2 text-white transition rounded-md bg-slate-400 hover:bg-slate-500"
            aria-label={`Ver detalhes da tarefa ${task.title}`}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="p-2 text-white transition rounded-md bg-slate-400 hover:bg-slate-500"
            aria-label={`Ver detalhes da tarefa ${task.title}`}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Talks;
