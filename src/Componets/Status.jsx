import React from 'react'
import "../Style/Status.scss"
const Status = ({total,player}) => {

  console.log(player[0].totalVote)
  return (
    <div className='status-container'>
        <h2>Total Votes: {total}</h2>
        <table className="status-table">
          <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Votes</th>
            <th>Rating</th>
          </tr>
          </thead>
          <tbody>
        {
          player.map((item,i)=>(
            <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.totalVote}</td>
            <td>{item.economy.toFixed(2)}%</td>
          </tr>

          ))
        }
        </tbody>
        
       
        </table>
        
    </div>
  )
}

export default Status