import React, { useState } from 'react'

const UpdateState = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
     })

    const handleClick = () => {
        setGame({id: 1, player: {name : "anything else"}})
    }
  return (
    <div onClick={handleClick}>Updating State {game.player.name}</div>
  )
}

export default UpdateState