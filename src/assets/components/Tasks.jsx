import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Talks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
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
            className="rounded-md bg-slate-400 p-2 text-white transition hover:bg-slate-500"
            aria-label={`Ver detalhes da tarefa ${task.title}`}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="rounded-md bg-slate-400 p-2 text-white transition hover:bg-slate-500"
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
