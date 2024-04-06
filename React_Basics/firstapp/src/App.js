import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import { useState } from 'react';


function App(props) {
  const darkStyles = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
}
const lightStyles = {
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "#282c34",
}


const [isDark, setIsDark] = useState(true);
const changeStyle = () => {
    setIsDark(!isDark);
}

  return (
    <div className="App">
      <header className="App-header" style={isDark ? darkStyles : lightStyles}>
        <h1>{props.title}</h1>
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
        <Btn changeStyle={changeStyle} isDark={isDark}/>
      </header>
    </div>
  );
}

export default App;
