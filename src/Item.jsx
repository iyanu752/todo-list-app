import PropTypes from 'prop-types';
import Cross from './assets/icon-cross.svg'
import check from './assets/icon-check.svg'



function Item({ task, onDelete, completed, onCheck}) {


  
    return (
      <div className=' lg: bg-light-blue-100 text-center rounded-t-sm items-center
      p-3 pl-10 pr-10 w-4/5 lg:w-full relative left-20 lg:left-0 sm:ml-10 mr-10  dark:bg-dark-blue-200    '>

        <li className='flex  flex-row justify-between font-josefin'>
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
            color: completed ? 'hsl(236, 9%, 61%)' : 'inherit',
          }}
         >
          {task.list}
        </span>

          <button  className='w-3 h-3 relative top-2' onClick={()=> onDelete(task.id)}>

            <img className='mr-5 ' src={Cross} alt='delete' />
          </button>
        </li>
        
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
