import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from './components/header';
import Feature from './components/feature';

function App() {

  const [getAmount, setAmount] = useState(12)
  const [getStatus, setStatus] = useState("Avaiable")

  const linkRef = useRef(null)

  useEffect(() => {
    if (getAmount == 0) {
      console.log("test1")
      setStatus("Sold Out")
    } 
  }, [getAmount] ) 



  return (
    <>
      <h1>jumlah barang: {getAmount} </h1>
      <h1>status barang: {getStatus} </h1>
      <button onClick={() => setAmount((prev) => prev + 1)}>Tambah barang</button>
      <button onClick={() => setAmount((prev) => (prev > 0 ? prev - 1 : prev))}>Kurangkan barang</button>

      <button ref={linkRef} onc>Hubungi Wa</button>

      {/* <Header />
      <Feature name="Kamar Lantai Atas"/>
      <Feature name="Kamar Lantai Bawah"/> */}
    </>
  );
}

export default App;
