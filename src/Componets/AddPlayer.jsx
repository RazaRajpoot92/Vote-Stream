import React, { useState } from 'react'
import "../Style/Player.scss"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const AddPlayer = ({data}) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [country, setCountry] = useState("")
    const [desc, setDesc] = useState("")
    


    const handleName = (e)=>{

        setName(e.target.value)
        
    }

    
    const handleImage = (e)=>{

        setImage(e.target.value)
        
    }
    
    const handleCountry = (e)=>{

        setCountry(e.target.value)
        
    }

    const handleDesc = (e)=>{

        setDesc(e.target.value)
        
    }
    const handleClick=()=>{
        if(name!==""&&country!==""&&desc!==""){

            let player = {
                name:name,
                country:country,
                image:image,
                desc:desc,
                up:0,
                down:0,
                totalVote:0,
                economy:0,
            }
    
            data.push(player)
            setName("")
            setImage("")
            setDesc("")
            setCountry("")
            toast("Congratulation!, Player Added!!!")
        }else{
            toast("Please fill all details")
        }
        
    }

  return (
    <div className='player-container'>
        
        <div className='player-inputs'>
        <h1 className='heading'>Add Your Favourite Player</h1>
        <input value={name} onChange={(e)=>handleName(e)} placeholder='Enter player name' type="text" required  />
        <input value={image} onChange={(e)=>handleImage(e)} placeholder='Enter player image url' type="text"  />
        <textarea value={desc} placeholder='Enter player details' className='desc' onChange={(e)=>handleDesc(e)} type="text"  />
        <input value={country} onChange={(e)=>handleCountry(e)} placeholder='Enter player country' type="text"  />
        <button className='btn' onClick={handleClick}>Add Player</button>
        <ToastContainer />
        </div>
    
    </div>
  )
}

export default AddPlayer