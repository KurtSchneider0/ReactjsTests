import logo from './logo.svg';
import './App.css';
import { FetchRandomUser } from './components/FetchRandomUser';
import { MyForm } from './components/Forms.js';
import { TodoList } from './components/TodoList.js';
import { Game } from './components/TicTacToe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<TodoList />*/}
        {/*<FetchRandomUser value={5} />*/}
        {/*<MyForm />*/}
        {/*<Game />*/}
      </header>
    </div>
  );
}

export default App;
