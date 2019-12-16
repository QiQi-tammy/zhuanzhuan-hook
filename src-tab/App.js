import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Item from './components/Item.tsx';

function App() {
  let [navList, setNav] = useState([])
  let [ind, changeInd] = useState(1)
  useEffect(() => {
    Axios.get('./data/nav.json').then(res => {
      console.log(res)
      setNav(res.data)
    })
  }, [])

  let [list, setList] = useState([])
  useEffect(() => {
    Axios.get('./data/list.json').then(res => {
      setList(res.data)
    })
  }, [])
  return (
    <div className="app">
      <nav>
        {
          navList.map(item => (
            <span
              key={item.id}
              className={ind === item.id ? 'active' : null}
              onClick={() => changeInd(item.id)}
            >
              {item.type}</span>
          ))
        }
      </nav>
      <Item index={ind} list={list} />
    </div>
  );
}

export default App;
