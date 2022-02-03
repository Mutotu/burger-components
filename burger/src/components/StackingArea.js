const StackingArea = (props) => {
  return (
    <div className='stacking-area'>
      <h1>StackingArea</h1>

      {props.burgerStack.map((layer, i) => {
        return (
          <div
            key={i}
            className='layer'
            style={{ backgroundColor: layer.color }}
          >
            {layer.name}
            <button
              onClick={() => {
                props.burgerStack.splice(i, 1);
                props.setBurgerStack([...props.burgerStack]);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className='reset' onClick={() => props.setBurgerStack([])}>
        Reset
      </button>
    </div>
  );
};

export default StackingArea;
