import React from 'react'
import Gamecard from './Gamecard'
import { useSelector } from 'react-redux'

function Gamelist({text}) {
  const games=useSelector((state)=>state.game.gamelist);
  console.log(games)
  return (
    <>
    
    <div className=' flex flex-wrap justify-around items-center' >
        {games.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=>  <Gamecard games={games} gamee={el} />)}
       
    </div>
    </>
  )
}

export default Gamelist