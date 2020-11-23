import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTaskHook from './Components/AddTaskHook';
//import  AddTask from './Components/AddTask';
import ListTaskHook from './Components/ListTaskHook';

//import  ListTask  from './Components/ListTask';


function App() {
  
  return (
    <div className="App">
      <h1>ToDo Application </h1>
      <AddTaskHook/>
      <ListTaskHook/>
    </div>
  );
}

export default App;
