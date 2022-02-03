import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import StackingArea from "./components/StackingArea";
import menuData from "./menu.data";

function App() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [burgerStack, setBurgerStack] = useState([]);

  return (
    <>
      <h1>🍔Burger Stacker - Multiple Components! 😋</h1>
      <div className='container'>
        <Menu
          menuItems={menuItems}
          setBurgerStack={setBurgerStack}
          burgerStack={burgerStack}
          setMenuItems={setMenuItems}
        />
        <StackingArea
          burgerStack={burgerStack}
          setBurgerStack={setBurgerStack}
        />
      </div>
    </>
  );
}

export default App;
