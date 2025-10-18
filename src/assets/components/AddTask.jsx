import { useState } from "react";

function AddTask(onAddTaskSubimit) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="px-4 py-2 border rounded-md border-slate-300 outline-slate-400"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="px-4 py-2 border rounded-md border-slate-300 outline-slate-400"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => onAddTaskSubimit(title, description)}
        className="px-4 py-2 font-medium text-white border rounded-md bg-slate-500"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
