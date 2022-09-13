import React from "react"
import Navbar from "./components/navbar/Navbar"
import { Hero } from "./components/hero/Hero"
import { Card } from "./components/card/Card"
import data from "./data"
import "./style.css"

export default function App() {
  // const katiepicture = 'katie-zaferes.png' - Import issue
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
    )
})    
    return (
        <div>
          <Navbar/>
          <Hero/>
          <section className="cards-list">
            {cards}
          </section>
        </div>
    )
}