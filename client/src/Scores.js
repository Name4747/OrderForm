import React, { useState,useEffect } from 'react'

const Scores = () => {
    const [scoreData,setSD] = useState([])
    const [name,setName] = useState('John')
    useEffect(async () => {
        setSD(await fetch(`/hello/${name}`)
            .then(res => res.json())
        )
    },[])
    return (
        <div>
            {scoreData.map(e => <DataItem score={e.score} name={e.name} key={e.id}/>)}
        </div>
    )
}

export default Scores
