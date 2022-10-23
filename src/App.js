import logo from './logo.svg';
import './App.css';

import * as mutation from './backend/mutations'
import * as query from './backend/queries'
import * as tags from './backend/tags'

function App() {

  mutation.createUser(abhi, [tags.tags[0], tags.tags[1], tags.tags[6], tags.tags[4]])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
