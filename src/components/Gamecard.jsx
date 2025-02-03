import React from 'react'
import { useDispatch } from 'react-redux'
import { deletegame } from '../redux/gameslice'
import Editgame from './Editgame'
import { Link } from 'react-router-dom'

function Gamecard({gamee,games}) {
  const dispatch=useDispatch()
  return (
    <div className='flex flex-col justify-center items-center transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl'>
       
        <div className='flex flex-col items-end rounded-xl mt-12 bg-[#A7001E] ' >
        <button style={{background:"none"}} className=' text-center w-5 h-7  fixed  border-none ' onClick={()=> dispatch(deletegame({id:gamee.id}))}>X</button>
        <img className=' w-72'  src={gamee.posterurl} />
        <h1 className=' w-72  text-center text-xl text-gray-50'>{gamee.name}</h1>
        </div>
        <div className='flex justify-center items-center '>
        <Editgame game={gamee} />
        <Link to={`/gamedow/${gamee.name}`}>
        <button className=' rounded-xl	 mt-2'>download</button>
        </Link>
        </div>
    </div>
  )
}

export default Gamecard