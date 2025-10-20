import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <div className="relative flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute bottom-0 left-0 mr-6 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl font-bold text-center text-slate-100">
            Detalhe da Tarefa
          </h1>
        </div>
        <div className="p-4 rounded-md bg-slate-100">
          <h2 className="mb-2 text-2xl font-semibold text-slate-700">
            {title}
          </h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
