
import { useEffect , useState} from 'react';
import './App.css';
import Card from './Components/card.component';


const App = () =>{
  
  const[drinks,setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/drinks/getAll")
      .then((response) => response.json())
      .then((drinks) => setDrinks(drinks))
  }, []);


  return (
    <div className="App">
      <h1>Unibar</h1>
      {drinks.map((drink) =>{
        return <Card drink={drink}/>;
      })}
    </div>
      
  );
}

export default App;


