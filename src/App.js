import logo from './logo.svg';
import './App.css';

import * as mutation from './backend/mutations'
import * as query from './backend/queries'
import * as tags from './backend/tags'

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { UserModel } from './models';
import { queries } from '@testing-library/dom';
Amplify.configure(awsconfig)

async function addPosts() {
  mutation.createPost("abhi", "Cool Project", "It's like really cool", 
                      "https://github.com/author/repo.git/", 
                      "image.com/image.png", ["C++", "Communication", "Desktop Development", "BAD TAG"])

}


function App() {

  addPosts()

  const tagsInput = [tags.tags[0], tags.tags[1], tags.tags[6], tags.tags[4]]
  mutation.createUser("abhi", tagsInput)
  
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
