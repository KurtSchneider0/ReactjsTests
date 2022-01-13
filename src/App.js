import './App.css';
import { FetchRandomUser } from './components/FetchRandomUser';
import { MyForm } from './components/Forms.js';
import { TodoList } from './components/TodoList.js';
import { Game } from './components/TicTacToe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList /> <br/>
        <FetchRandomUser value={5} /><br/>
        <MyForm /><br/>
        <Game /><br/>
      </header>
    </div>
  );
}

export default App;
