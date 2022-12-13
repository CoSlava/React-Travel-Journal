import React from "react"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import data from "./data.js"

export default function App(){
    const cards = data.map(card=>{
        return <Body 
                    {...card}
                />
    })
    return(
        <div>
            <Header />
            {cards}
        </div>
    )
}