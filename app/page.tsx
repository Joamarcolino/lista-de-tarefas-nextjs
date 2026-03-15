'use client'

import { useState } from "react"
export default function App() {
  const [tarefas, setTarefas] = useState<string[]>([])
  const [tarefa, setTarefa] = useState("")
  function adicionar() {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa])
      setTarefa("")
    }
  }
  function deleteItem(index:number){
    setTarefas(tarefas.filter((_,i) => i !== index))
  }
  const handlekeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == 'Enter'){
      adicionar()
    }
     if (e.key === 'Escape') {
      setTarefa("")
    }
  }
  return <div className="max-w-md mx-auto mt-10 p-6 border-gray-300 border-2 duration-500 ease-in-out hover:scale-101  hover:shadow-2xl">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 pb-3 border-b-2 border-gray-200"> Lista de Tarefas</h1>
    <div className="flex gap-2 mb-6">
      <input 
        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm" 
        value={tarefa}
        onKeyDown={handlekeydown}
        onChange={(e) => setTarefa(e.target.value)}
        type="text" 
        placeholder="Digite uma nova tarefa..."
      />
      <button 
        className="px-5 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg" 
        onClick={adicionar}
      >
        Adicionar
      </button>
    </div>
    <ul className="p-2.5 border-2 border-gray-300 bg-white rounded-xl  inset-shadow-md inset-shadow-gray-500 overflow-y-scroll max-h-[50vh] ">
      {tarefas.map((t, i) =>
        <div 
          className="flex items-center justify-between p-4 border-b border-gray-300  hover:scale-102 bg-gray-50 transition-colors  group" 
          key={i}
        >
          <div className="flex  max-w-[200px] items-center gap-3 flex-1 ">
            <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
            <li className="text-gray-700 flex-1 truncate pr-2">{i + 1} {t}</li>
          </div>
          <button 
            className="px-4 py-2 bg-linear-to-r from-red-500 to-rose-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-rose-700 active:scale-95 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm" 
            onClick={() => deleteItem(i)}
          >
            Remover
          </button>
        </div>
      )}
      {tarefas.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <div className="text-4xl mb-3">;0</div>
          <p>Nenhuma tarefa adicionada ainda</p>
          <p className="text-sm text-gray-400 mt-1">Adicione sua primeira tarefa acima</p>
        </div>
      )}
    </ul>
    <div className="mt-4 text-sm text-gray-500 text-center">
      {tarefas.length > 0 ? `${tarefas.length} tarefa${tarefas.length !== 1 ? 's' : ''} pendente${tarefas.length !== 1 ? 's' : ''}` : "Comece adicionando tarefas!"}
    </div>
  </div>
}