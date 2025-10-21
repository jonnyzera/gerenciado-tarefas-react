import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Title from '../components/Title';

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  return (
    <div className="w-screen h-screen p-6 bg-slate-900">
      <div className="mx-auto w-[500px] space-y-4">
        <div className="relative flex justify-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 bottom-0 left-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="p-6 space-y-4 shadow-2xl rounded-xl border-x-gray-700 bg-slate-800">
          <h2 className="pb-2 text-2xl font-extrabold text-indigo-400 border-b border-indigo-700">
            {title}
            <div></div>
          </h2>
          <p className="text-sm tracking-wider text-gray-400 uppercase font-semibold-200">
            Descrição:
          </p>
          <p className="text-gray-200 whitespace-pre-wrap">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
