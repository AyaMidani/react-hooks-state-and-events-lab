import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [Darkmode, setDarkmode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = Darkmode ? "App dark" : "App light"

  function DarkModeFunction(){
    setDarkmode((Darkmode) => !Darkmode);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={DarkModeFunction}>
          {Darkmode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
