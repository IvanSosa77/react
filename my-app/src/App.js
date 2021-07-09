import "./App.css";
import firebase from 'firebase/app'
import '@firebase/firestore';
import AppRouters from "./Routers/AppRouters";

function App() {
  return (
    <div className="App">
      <AppRouters />
    </div>
  );
}

export default App;





const app = firebase.initializeApp({
    apiKey: "AIzaSyAt_a0YCXLHRZlN5UhIxSk80COOolAp5Zo",
    authDomain: "proyecto-b07c5.firebaseapp.com",
    projectId: "proyecto-b07c5",
    storageBucket: "proyecto-b07c5.appspot.com",
    messagingSenderId: "61538640672",
    appId: "1:61538640672:web:201cd6b7088602143fed45"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}