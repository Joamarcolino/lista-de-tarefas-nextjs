'use client'


import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(""); // Limpa o input após adicionar a tarefa
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="display flex justify-center pt-40 ">
      <div className="max-w-sm w-full shadow-lg bg-white rounded-xl opacity-70 p-7 place-content-around ">
        <h2 className="display flex justify-start text-[20px] font-bold cursor-not-allowed font-mono mb-7">To-Do List</h2>
        <div className="display flex justify-center items-center">
          <form action="">

          
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Enter your task..." 
            className="p-[10px] font-mono font-bold bg-slate-200 rounded-xl outline-none mr-5" 
          />
          </form>
          <button className="bg-orange-400 font-bold text-[17px] p-[10px] rounded-xl cursor-pointer" onClick={handleAddTask}>+</button>
        </div>
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li key={index} className="flex justify-between bg-slate-200 rounded-xl shadow-lg mb-4 items-center p-2 border-b cursor-not-allowed shadow">
              <span>{t}</span>
              <button className="text-white text-[12px] font-bold  bg-red-600 rounded-xl p-2 opacity-90 cursor-pointer" onClick={() => handleRemoveTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
