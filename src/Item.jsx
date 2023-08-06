import PropTypes from 'prop-types';
import Cross from './assets/icon-cross.svg'
import { useState } from 'react';




function Item({ task, onDelete,}) {
  const [check, setChecked] = useState(false)


  const isChecked = () => {
    setChecked(!check)
  }

  
    return (
      <div className=' bg-dark-blue-400 text-center rounded-sm
      p-3 pl-15 pr-15'>

        <li className='flex  flex-row justify-between items-center w-full'>
          <input type='checkbox'className='mr-2' onClick={isChecked}/>
          
            {check ? (
            <del  className=" text-light-blue-300"> <span>{task.list}</span></del>
          ):(
           <span>{task.list}</span> 
          )}
         

          <button  className='w-3 h-3' onClick={()=> onDelete(task.id)}>

            <img className='ml-2' src={Cross} alt='delete' />
          </button>
        </li>
        <hr className='w-full text-dark-blue-300'/>
      </div>
  
    );
  }
  

Item.propTypes = {
    task: PropTypes.any.isRequired,
    onDelete: PropTypes.func.isRequired,
    
};

export default Item;
