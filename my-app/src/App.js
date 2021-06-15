import './App.css';
import './components/main.css'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './assets/carro.png';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
    <NavBar image={image}/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
