import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] w-full py-5 mt-10'>
        <div className='h-full w-75 bg-red-400 rounded-2xl shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded px-3 py-1 text-sm'>High</h3>
                <h4>20 feb 2024</h4>
            </div>
            <h2></h2>
        </div>
        
        
    </div>
  )
}

export default TaskList