import light from '../src/assets/icon-sun.svg'
// import Bglight from '../src/assets/bg-desktop-light.jpg'
import Item from './Item'
import { useState,} from 'react'



export default function Body () {
    
        const [inputName, setInputName] = useState("")
        const [tasks, setTasks] = useState([])
        const [completed, setCompleted] = useState({})
        const [filterOption, setFilterOption] = useState("All")


        const handleInput = (e) => {
          setInputName(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          
          if (inputName) {
            const newTask = { id: inputName, list: inputName}
            setTasks([...tasks, newTask]) 
            setInputName("")
            
          }
        }

        const deleteTask = (taskId) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId)
            setTasks(updatedTasks)
          }

    
        const ClearTasks = () => {
          setTasks([])
        }


        const toggleCompletion = (taskId) => {
          setCompleted((prevCompleted) => ({
            ...prevCompleted,
            [taskId]: !prevCompleted[taskId],
          }))
        }
        const tasksLeft = tasks.filter((task) => !task.completed).length;

        const clearCompletedTasks = () => {
          const activeTasks = tasks.filter((task) => !completed[task.id]);
          setTasks(activeTasks);
        };




    return (
        <header className='h-screen bg-dark-blue-200 sm:min-h-screen sm: overflow-x-hidden'>
            {/* <img src={Bglight} className=' lg:w-full z-0 absolute sm: h-1/4'/> */}
            <nav className='flex  justify-center gap-80 p-20 relative'>
                <h1 className='lg:text-xl font-xl text-light-blue-100  z-10 sm: pl-32 text-2xl'>TODO</h1>
                <img src={light} className='sm: relative right-28 ' />    
            </nav>
            <main>

                <form className='lg: flex flex-row gap-11 justify-center items-center' onSubmit={handleSubmit}>
                    <input type='text' onChange={handleInput} value={inputName}  placeholder='Add a new Task' className=' p-4 w-2/5 h-12 rounded-md mb-5 relative left-10 text-center' />
                    <button type='submit' className='relative bg-dark-blue-300  rounded-md mb-5 p-3 '>+</button>  
                </form>

                <div className='relative flex justify-center'>
                  <ul>
                  {tasks.length > 0 ? (
                        tasks
                          .filter((task) => {
                            if (filterOption === "All") {
                              return true;
                            } else if (filterOption === "Active") {
                              return !completed[task.id];
                            } else if (filterOption === "Completed") {
                              return completed[task.id];
                            }
                            return true;
                          })
                          .map((task) => (
                            <Item
                              task={task}
                              key={task.id}
                              onDelete={deleteTask}
                              completed={completed[task.id]}
                              onCheck={() => toggleCompletion(task.id)}
                            />
                          ))
                      ) : (
                      <span className='text-dark-blue-200'>No tasks available</span>
                    )}
                    <div className=' lg:flex flex-row gap-5  bg-dark-blue-400 rounded-sm items-center justify-center p-1 sm:text-center sm: flex pl-10 pr-10 text-sm mt-10'>
                      <p>{tasksLeft} Tasks left</p>
                      <p className=' cursor-pointer hover:text-primary-grad' onClick={() => setFilterOption("All")}>All</p>
                      <p className=' cursor-pointer hover:text-primary-grad' onClick={() => setFilterOption("Active")}> Active </p>
                      <p className=' cursor-pointer hover:text-primary-grad' onClick={() => setFilterOption("Completed")}>Completed</p>
                      <p className='cursor-pointer hover:text-primary-grad' onClick={clearCompletedTasks}> clear completed</p>
                      <p className=' cursor-pointer hover:text-primary-grad' onClick={ClearTasks}>Clear All</p>
                    </div>
                  </ul>
                </div>
            </main>
        </header>
    )
}



