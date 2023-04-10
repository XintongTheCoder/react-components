const { useState } = React;

const GroceryListItem = (props) => {
  const [onHover, setOnHover] = useState(false);
  const style = {
    fontWeight: onHover ? 'bold' : 'normal'
  };
  return (
    <li style={style} onMouseOver={() => setOnHover(!onHover)} onMouseOut={() => setOnHover(!onHover)}>
      {props.grocery}
    </li>
  );
};

const GroceryList = (props) => {

  const onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      {props.groceries.map((grocery) => (<GroceryListItem grocery={grocery}></GroceryListItem>))}
    </ul>
  );
};


const App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList groceries={['cucumbers', 'kale']} />
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));

