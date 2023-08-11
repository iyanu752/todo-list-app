import light from '../src/assets/icon-sun.svg'
import Bgdark from '../src/assets/bg-desktop-dark.jpg'
import bglight from './assets/bg-desktop-light.jpg'
import dark from './assets/icon-moon.svg'
import Item from './Item'
import { useState, useEffect} from 'react'



export default function Body () {
    
        const [inputName, setInputName] = useState("")
        const [tasks, setTasks] = useState([])
        const [completed, setCompleted] = useState({})
        const [filterOption, setFilterOption] = useState("All")
        const [darkToggle, setDarkToggle] = useState(null)
        const [iconToggle, setIconToggle] = useState(false)

//DARK MODE USE EFFECT HOOK
        useEffect(() => {
          if ( darkToggle === "dark") {
              document.documentElement.classList.add("dark")
          } else {
              document.documentElement.classList.remove("dark")
          }
      }, [darkToggle])

//DARK MODE FUNCTION      
      const ToggleDarkMode = (() => {
        setDarkToggle((prevDarkToggle) => (prevDarkToggle === "dark" ? "light" : "dark"));
        setIconToggle(!iconToggle)
    })
    
//HANDLE INPUT FUNCTION
        const handleInput = (e) => {
          setInputName(e.target.value);
        };

//HANDLE SUBMIT FUNCTION        
        const handleSubmit = (e) => {
          e.preventDefault();
          
          if (inputName) {
            const newTask = { id: inputName, list: inputName}
            setTasks([...tasks, newTask]) 
            setInputName("")
            
          }
        }
//DELETE TASK FUNCTION
        const deleteTask = (taskId) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId)
            setTasks(updatedTasks)
          }

//CLEAR ALL TASKS FUNCTION   
        const ClearTasks = () => {
          setTasks([])
        }

//COMPLETED TASKS FUNCTION
        const toggleCompletion = (taskId) => {
          setCompleted((prevCompleted) => ({
            ...prevCompleted,
            [taskId]: !prevCompleted[taskId],
          }))
        }

//TASKS LEFT FILTER         
        const tasksLeft = tasks.filter((task) => !task.completed).length;

//CLEAR COMPLETED TASKS FUNCTION        
        const clearCompletedTasks = () => {
          const activeTasks = tasks.filter((task) => !completed[task.id]);
          setTasks(activeTasks);
        };




    return (
        <header className={`h-screen sm:min-h-screen sm:overflow-x-hidden ${darkToggle === 'dark' ? 'bg-dark-blue-100' : 'bg-light-blue-100'} ${darkToggle ? 'bg-transition' : ''}`}>

            <img src={darkToggle === 'dark' ? Bgdark : bglight} className=' lg:w-full lg:h-2/5 z-0 absolute sm: h-1/4'/>
            <nav className='flex  justify-center gap-96 p-20 relative'>
                <h1 className='lg:text-xl font-xl text-light-blue-100  z-10 sm: pl-32 text-2xl font-josefin'>TODO</h1>
                <img
                src={iconToggle ? light : dark}
                className={`relative right-44 transition-transform transform  ${
                  iconToggle ? 'rotate-180' : ''
                }`}
                onClick={ToggleDarkMode}
              />    
            </nav>
            <main>

                <form className='lg: flex flex-row gap-11 justify-center items-center' onSubmit={handleSubmit}>
                    <input type='text' onChange={handleInput} value={inputName}  placeholder='Add a new Task' className=' p-4 w-4/12 h-12 rounded-md mb-5 relative left-10 text-center dark:bg-dark-blue-200 sm:w-2/5' />
                    <button type='submit' className='relative bg-light-blue-100  rounded-md mb-5 p-3 dark:bg-dark-blue-200'>+</button>  
                </form>

                <div className='relative flex justify-center pr-16 '>
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
                        <div className='flex items-center justify-center h-10 pl-24 font-xl text-2xl'>
                          No tasks available
                        </div>
                    )}
                    <div className=' lg:flex flex-row gap-5 ml-10 lg:p-3 lg:pl-8 relative left-5 lg:left-0 lg:w-full rounded-bl-sm rounded-br-sm bg-light-blue-100 items-center justify-center p-1  sm:text-center sm: flex  text-sm  dark:bg-dark-blue-200'>
                      <p>{tasksLeft} Tasks left</p>
                      <p className='font-josefin cursor-pointer hover:text-primary-grad hover:font-xl' onClick={() => setFilterOption("All")}>All</p>
                      <p className='font-josefin cursor-pointer hover:text-primary-grad hover:font-xl' onClick={() => setFilterOption("Active")}> Active </p>
                      <p className='font-josefin cursor-pointer hover:text-primary-grad hover:font-xl' onClick={() => setFilterOption("Completed")}>Completed</p>
                      <p className='font-josefin cursor-pointer hover:text-primary-grad hover:font-xl' onClick={clearCompletedTasks}> clear completed</p>
                      <p className='font-josefin cursor-pointer hover:text-primary-grad hover:font-xl' onClick={ClearTasks}>Clear All</p>
                    </div>
                  </ul>
                </div>
            </main>
        </header>
    )
}



