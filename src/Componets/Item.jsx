import React from 'react'
import "../Style/Item.scss"
import upicon from "../assets/up.png"
import downicon from "../assets/down.png"
import rank from "../assets/rank.png"

const Item = ({index,image,name,up,down,country,desc,onUp,onDown}) => {

  return (
    <div className='item-container'>
        {index===0&&<img src={rank} className='item-rank' />}
        <div className='item-left'>
            <img className='item-image' src={image} alt="" />
        </div>
    
        <div className='item-right' >
            <div className='item-details'>
            <h1 className='item-name'>{name}</h1>
            <h4>{country}</h4>
            <p className='item-desc'>{desc}</p>
            </div>
            <div className='item-vote'>
                <h3>Vote Now</h3>
                <div className='item-up flex'>
                    <img onClick={onUp} className='up-icon' src={upicon} alt="" />
                    <h3 className='v-con'>{" "+up}</h3>
                </div>

                <div className='item-down flex'>
                    <img onClick={onDown} className='down-icon' src={downicon} alt="" />
                    <h3 className='v-con'>{" "+down}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item