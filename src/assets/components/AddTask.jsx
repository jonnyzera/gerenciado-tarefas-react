import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubimit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha o título e a descrição da tarefa.",
            );
          }
          setTitle("");
          setDescription("");
          onAddTaskSubimit(title, description);
        }}
        className="px-4 py-2 font-medium text-white border rounded-md bg-slate-500"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
