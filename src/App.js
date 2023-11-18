import React from "react";
import Header from "./components/Header";
import Card from "./components/Card.js"
import AppElements from "./AppData"

function App() {
  const appItems = AppElements.map((item) => {
    return <Card
      key={item.id}
      item={item} />
  })
  return (
    <div className="container">
      <Header />
      <div className="cards">
        {appItems}
      </div>
    </div>
  )
}

export default App;