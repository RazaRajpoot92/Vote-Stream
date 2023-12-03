import React, { useState } from 'react'
import "./Home.scss"
import Item from '../Componets/Item'

import players from "../Data/Data"
import Status from '../Componets/Status'

const Home = () => {

  const [player, setPlayer] = useState([...players])
  
  const [total, setTotal] = useState(0)

  const onUp = (i)=>{
    let np = [...player]
    let playerCopy = {...player[i]}
    playerCopy.up +=1
    playerCopy.totalVote +=1
    let eco = playerCopy.up * 100 / playerCopy.totalVote
    playerCopy.economy = eco
    np[i]=playerCopy
    setPlayer(np)
    setTotal(total+1)
   
  }
    
  const onDown = (i)=>{

    let np = [...player]
    let playerCopy = {...player[i]}
    playerCopy.down +=1
    playerCopy.totalVote +=1
    let eco = playerCopy.up * 100 / playerCopy.totalVote
    playerCopy.economy = eco
    np[i]=playerCopy
    setPlayer(np)
    setTotal(total+1)
    
  }

  let newPlayer = player.sort((a, b) => b.up - a.up)
 
  
  return (
    <>
    
    <div className='home-container'>
    <Status total={total} player={newPlayer} />
    <div className='items-container'>
      {
        newPlayer.map((item, i)=>(
          <Item key={i} 
          index={i}
          name={item.name} 
          image={item.image} 
          up={item.up} 
          down={item.down}
          country={item.country}
          desc = {item.desc}
          onUp={()=>onUp(i)}
          onDown={()=>onDown(i)}

          />
          
        ))
      }
       
    </div>
    </div>
    </>
  )
}

export default Home