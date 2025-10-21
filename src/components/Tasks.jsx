import { CheckIcon, ChevronRightIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="p-6 space-y-4 bg-gray-800 shadow-lg rounded-xl">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex w-full items-center gap-2 rounded-lg p-3 text-left text-gray-100 transition-colors ${
              task.isCompleted
                ? 'bg-gray-700 line-through opacity-60'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {task.isCompleted && (
              <CheckIcon className="w-5 h-5 text-indigo-400" />
            )}
            <span className="truncate">{task.title}</span>
          </button>
          <Button onClick={() => onSeeDetailsClick(task)} title="Ver Detalhes">
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            title="Excluir Tarefa"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
