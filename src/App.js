import logo from './logo.svg';
import './App.css';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <p style={{fontSize:"3em",marginBlockEnd:"0.5em"}}>✅Todo List</p>
      <Task/>
    </div>
  );
}

export default App;
