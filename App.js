import { Message } from './Message';
import './App.css';



function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <p className="app_hello">
          Helo React
        </p>
        <Message name="teacher" /> 
      </header>
    </div>
  );
}

export default App;
