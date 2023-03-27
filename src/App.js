import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    setShowMessage(true);
  }

  return (
    <div className="App">
      <header className="App-header">
      

      <div className="catalogo-item_1">
        <img src="https://www.thespruceeats.com/thmb/_4hgd3VaP2dyxZ5RZ4iufPVdFLA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-tomato-bloody-mary-2216224-Hero_01-39f379920e9d474ebdcf9e96f3e054f3.jpg" alt="Bloody Marry" style={{ width: '150px', height: '150px' }} />
        <h2>Bloody Marry</h2>
        <p>Drink com suco de tomate e vodka</p>
      </div>
--------------------------------------------------------------------
      <div className="catalogo-item_2">
        <img src="https://www.elhombre.com.br/wp-content/uploads/2017/01/negroni-receita.jpg" alt="Negroni" style={{ width: '150px', height: '150px' }} />
        <h2>Negroni</h2>
        <p>Drink com gin, campari e vermute tinto</p>
      </div>

      </header>
    </div>
      
  );
}

export default App;


