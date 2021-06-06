import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './assets/carr.jpg';
import ItemListContainer from './components/ItemListContainer';
import ClaseState from './components/ClaseState';
import UseState from './components/UseStateFunction'
import Contador from './components/ItemCount';

function App() {
  return (
    <div className="App">
    <NavBar image={image}/>
    <ItemListContainer greeting="Entregable clase 3 React Js"/>
    {/*<ClaseState/>*/}
    {/*<UseState/>*/}
    <Contador/>
    </div>
  );
}

export default App;
