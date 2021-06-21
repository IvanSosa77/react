import './App.css';
//import './components/main.css'
//import NavBar from './components/NavBar';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import image from './assets/carro.png';
//import ItemListContainer from './components/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer'
//import Promesa from './components/Promesa'  ==> este componente es para ver una promesa con carga asincrona. 
import AppRouters from './Routers/AppRouters'


function App() {
  return (
    <div className="App">
    <AppRouters/>

    {/*<NavBar image={image} />*/}
    {/*<ItemListContainer/>*/}
    {/* <ItemDetailContainer/>*/}
    </div>
  );
}

export default App;
