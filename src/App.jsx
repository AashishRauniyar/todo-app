import { useState } from 'react'



function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")


  const addTasks = ()=>{
    if (task !== ""){
      setTasks([...tasks,task])
      setTask("")
      console.log(tasks);
    }
  }


  
  const deleteTasks = (index)=>{
    const updateList = [...tasks];
    // delete updateList[index];
    updateList.splice(index,1)
    setTasks(updateList)
  }


  

  return (
    <>
    <div className='flex flex-col items-center'>
      
        <h1 className=' text-2xl font-bold m-16 '>Simple Todo App</h1>
      
      <div className='p-6'>
        <input className='bg-slate-100 rounded-md m-3 p-3' 
        type="text"
        placeholder='create a new todo'
        value={task}
        onChange ={(e)=>{
          setTask(e.target.value)
        }}
        />
        <button 
        onClick={addTasks}
        className='bg-green-400 text-white p-3 m-3 rounded-md font-bold hover:bg-green-500'>Add Task</button>
      </div>

      <div>
        {
          tasks?.length > 0 ? 
          (
            <ul>
              {
                tasks.map((task, index)=>(
                  <div className='flex bg-slate-100 m-4 py-6 pl-12 pr-4 rounded-md' key={index}>
                    <li className='self-center font-semibold pr-10 mr-6 grow'>
                      {task}
                    </li>
                    <li>
                      
                    </li>
                    <button 
                    onClick={()=>{deleteTasks(index)}}
                    className='bg-red-400 text-white p-2 m-2 rounded-md font-bold hover:bg-red-500'>
                      Delete
                    </button>
                  </div>
                ))
              }
            </ul>
          ):
          (
            <div>
              <p>No Task Found</p>
            </div>
          )
        }
      </div>
    </div>
    </>
  )
}

export default App
