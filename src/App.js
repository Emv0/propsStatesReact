import './App.css';
import Contacts from './components/Contacts';
import {useState} from "react";


function App() {

  const [stateContacts,setStateContacts] = useState(false);
  
  const state = ()=>{
    console.log("funcionando");
    var col = document.getElementById("color");
    setStateContacts(!stateContacts);
    if(stateContacts == true){
      col.style.color = "green"
    }else{    
      col.style.color = "red"
    }
  }

  return (
    <div className="App">
        <Contacts nombre="Esteban" descripcion="Hey i'am using Whatsapp"/>
        <h2 id='color'>Estado { stateContacts ? "En linea": "Ocupado" }</h2>
        <button onClick={state}>confirmar</button>
    </div>
  );
}

export default App;
