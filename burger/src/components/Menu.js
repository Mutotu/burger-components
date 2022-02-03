import { useState } from "react";

const Menu = (props) => {
  const [item, setItem] = useState("");
  return (
    <div className='menu'>
      <h1>Menu</h1>
      {props.menuItems.map((item, i) => {
        return (
          <div
            className='layer'
            style={{ backgroundColor: item.color }}
            onClick={() => {
              props.setBurgerStack([item, ...props.burgerStack]);
            }}
            key={i}
          >
            {item.name}
          </div>
        );
      })}
      <input
        type='text'
        value={item}
        placeholder='add item'
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (item !== "") {
            props.setMenuItems([
              ...props.menuItems,
              { name: item, color: "red" },
            ]);
            setItem("");
          }
        }}
      >
        Add item
      </button>
    </div>
  );
};

export default Menu;
