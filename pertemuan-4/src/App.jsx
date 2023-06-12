import React from 'react'
import Tombol from './components/Tombol'
import { useState } from 'react';

const App = () => {
  //let count = 0;
  const [count, setCount] = useState(0);
  const [ubah, setUbah] = useState(true);

  const incrementCount = () => {
    setCount(count + 1)
    // count++;
    // console.log(count);
  }

  const decrementCount = () => {
    setCount(count - 1)
    // count++;
    // console.log(count);
  }

  const ubahWarna = () => {
    setUbah(!ubah)
  }

  return (
    <>
      <div style={{ background: ubah? 'plum' : 'pink' , padding : 20}}>
        <p>Count : {count}</p>
        <div style={{margin: 5, display : 'flex', gap : 5}}>
          <Tombol handleClick={() => incrementCount()}>Tambah Count</Tombol>
          <Tombol handleClick={() => decrementCount()}>Kurang Count</Tombol>
        </div>
        <div>
          <Tombol handleClick={() => ubahWarna()}>Ganti Background</Tombol>
        </div>
      </div>
    </>
  )
}

export default App