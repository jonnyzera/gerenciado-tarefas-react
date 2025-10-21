import { useState } from 'react';
import Input from './Input';

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="flex flex-col p-6 space-y-4 bg-gray-800 shadow-lg rounded-xl">
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
          // verificar se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert('Preencha o título e a descrição da tarefa.');
          }
          onAddTaskSubmit(title, description);
          setTitle('');
          setDescription('');
        }}
        className="px-4 py-2 font-medium text-white transition-colors bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
