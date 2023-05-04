import { useState } from "react"
import phrases from "./assets/phrases.json";
import "./App.css";
import getRandomInt from "./utils/getRandom";
import Phrase from "./components/Phrase";
import Button from "./components/Button/Button";

function App() {

 let getRandomPhrase =  phrases[getRandomInt(phrases.length)];
 const [phraseObject,setPhraseObject] = useState(getRandomPhrase);
 
const colores= ["blue","red","yellow","green","violet"]
let randomColor= colores[getRandomInt(colores.length)];
const [colorRandom, setColorRandom] = useState(randomColor);

 const ChangePhrase =() => {
  setPhraseObject(!phraseObject);
     setColorRandom(!colorRandom);

  };
  
 return (
    <>
    <Phrase phrase={getRandomPhrase.phrase } color={randomColor}/>   
    <p className="author">
      Author: {getRandomPhrase.author}
    </p>
    <div className ="btn_container">
    <  Button handlerClick = {ChangePhrase}/> 
   
   </div>
   </>
  );
}

export default App
