import React from 'react'

const Card = ({title, description}) => {
  return (
    <div className="bg-slate-100 border border-gray-200 rounded-lg shadow-md p-6 m-4 w-[25rem]">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className='bg-zinc-400 h-[1px] w-full mt-2'/>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  )
}

export default Card