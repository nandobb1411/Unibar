
import { useEffect , useState} from 'react';
import './App.css';
import CardList from './Components/Card-List/card-list.component';
import NavBar from './Components/Navbar/NavBar.component';


const App = () =>{
  
  const[drinks,setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/drinks/getAll")
      .then((response) => response.json())
      .then((drinks) => setDrinks(drinks))
  }, []);


  return (
    <div className="App">
      <NavBar/>
      <CardList drinks={drinks}/>
      </div>
      
  );
}

export default App;


