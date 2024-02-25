import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import config from './aws-exports'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Amplify, Storage} from 'aws-amplify'
import { ThemeProvider } from '@material-tailwind/react'
Amplify.configure(config)

// TODO: Make storage private before deployment

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <ThemeProvider>
    {/*Storage.configure({ level: 'private' })*/}
    <App />
  </ThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals({})
