import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './assets/carr.jpg';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar image={image}/>
    <ItemListContainer greeting="Entregable clase 3 React Js"/>
    </div>
  );
}

export default App;
