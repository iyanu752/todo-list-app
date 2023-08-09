import PropTypes from 'prop-types';
import Cross from './assets/icon-cross.svg'
import check from './assets/icon-check.svg'



function Item({ task, onDelete, completed, onCheck}) {


  
    return (
      <div className=' lg: bg-dark-blue-400 text-center rounded-sm
      p-3 pl-15 pr-15 sm:ml-10 mr-10 '>

        <li className='flex  flex-row justify-between items-center w-full '>
          <input type='checkbox'className='mr-2 hidden'  checked={completed}
          onChange={onCheck} id={`checkbox-${task.id}`}/>
         

         <label
          htmlFor={`checkbox-${task.id}`}
          className='checkbox inline-block w-6 h-6 border-2 rounded-full border-gray-300 transition-colors cursor-pointer'
          style={{
            background: completed
              ? 'linear-gradient(135deg, #8A2BE2, #0076ff)'
              : 'none',
            borderColor: completed ? 'transparent' : '#ccc',
          }}
        >
          {completed && (
            <img
              src={check}
              alt='check'
              className='w-4 h-4 mx-auto mt-px opacity-100 items-center'
            />
          )}
        </label>


          <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'light-blue-200' : 'inherit',
          }}
        >
          {task.list}
        </span>

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
    onCheck:PropTypes.func.isRequired,
    completed:PropTypes.func.isRequired,
    
};

export default Item;
