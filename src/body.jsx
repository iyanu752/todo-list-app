import light from '../src/assets/icon-sun.svg'
import Bglight from '../src/assets/bg-desktop-light.jpg'
import Item from './Item'
// import listdata from './listdata'
import { useState } from 'react'



export default function Body () {
    
        const [inputName, setInputName] = useState("");
        const [tasks, setTasks] = useState([]);
        const handleInput = (e) => {
          setInputName(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (inputName) {
            const newTask = { id: inputName, list: inputName };
            setTasks([...tasks, newTask]); 
            setInputName(""); 
            console.log(newTask)
          }
        };

        const deleteTask = (taskId) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId);
            setTasks(updatedTasks);
          }

    
        const ClearTasks = () => {
          setTasks([])
        }
        


    return (
        <header className='h-screen bg-dark-blue-200'>
            <img src={Bglight} className=' w-full z-0 absolute'/>
            <nav className='flex  justify-center gap-80 p-20 relative'>
                <h1 className=' text-xl font-xl text-light-blue-100  z-10'>TODO</h1>
                <img src={light}/>    
            </nav>
            <main>

                <form className='flex flex-row gap-11 justify-center items-center' onSubmit={handleSubmit}>
                    <input type='text' onChange={handleInput} value={inputName}  placeholder='Add a new Task' className=' p-4 w-2/5 h-12 rounded-md mb-5 relative left-10 text-center' />
                    <button type='submit' className='relative bg-dark-blue-300  rounded-md mb-5 p-3 '>+</button>  
                </form>

                <div className='relative flex justify-center'>
                  <ul>
                    {tasks.length > 0 ? (
                      tasks.map((task) => (
                        <Item task={task} key={task.id} onDelete={deleteTask}/>
                      ))
                    ) : (
                      <span className='text-light-blue-300'>No tasks available</span>
                    )}
                    <div className='flex flex-row gap-5  bg-dark-blue-400 rounded-sm items-center justify-center p-1'>
                      <p className=' cursor-pointer'>Tasks left</p>
                      <p className=' cursor-pointer'>All</p>
                      <p className=' cursor-pointer'> Active </p>
                      <p className=' cursor-pointer'>Completed</p>
                      <p className=' cursor-pointer hover:text-primary-grad' onClick={ClearTasks}>Clear Completed</p>
                    </div>
                  </ul>
                </div>
            </main>
        </header>
    )
}



// CLEAR ALL FUNCTION

// const deleteTask = (taskId) => {
//     const updateTasks = tasks.filter((task) => task.id == taskId)
//     setTasks(updateTasks)
// }