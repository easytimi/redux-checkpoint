
import './App.css';
import  ListTask from "./Components/Listtask"
import AddTask from "./Components/addtask"

function App() {
  return (
    <div className="App">
     <div className="container">
     <h1>TODO LIST</h1>
      <ListTask/>
      <AddTask/>
      
     </div>
      

     
    </div>
  );
}

export default App;
