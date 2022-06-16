import './App.css';
import TodoList from './Components/ToDoList';
// import Items from '../src/items.json';

function App(props) {
  return (
    <>
      <TodoList
        items={props.items}
        onListClick={() => console.log('List clicked!')}
        onItemClick={(item, event) => {
          console.log(item, event);
        }}
      />
    </>
  );
}

export default App;
