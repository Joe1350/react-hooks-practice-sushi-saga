import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushiList, setAllSushiList] = useState([])
  const [money, setMoney] = useState(100)

  const eatenSushi = allSushiList.filter(oneSushi => oneSushi.eaten)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(allSushiList => setAllSushiList(allSushiList))
  }, [])

  function handleEatSushiClick(eatenSushi) {
    if (money >= eatenSushi.price) {
      const updatedSushi = allSushiList.map(oneSushi => {
        if (oneSushi.id === eatenSushi.id) {
          return {...oneSushi, eaten: true}
        } else {
          return oneSushi
        }
      })
      setAllSushiList(updatedSushi)
      setMoney(money - eatenSushi.price)
    } else {
      alert('You need more money.')
    }
  }

  return (
    <div className="app">
      <SushiContainer
        allSushiList={allSushiList}
        onEatSushiClick={handleEatSushiClick}
      />
      <Table
        money={money}
        plates={eatenSushi}
      />
    </div>
  );
}

export default App;
