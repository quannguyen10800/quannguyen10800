import logo from './logo.svg';
import './css/animate.css';
import './css/bootstrap.css';
import './css/jquery.fancybox.css';
import './css/jquery.pagepiling.css';
import './css/LineIcons.css';
import './css/owl.carousel.css';
import './css/owl.theme.default.css';
import './App.css';
import PreLoader from "./components/pre-loader/PreLoader";
import {useEffect, useState} from "react";
import Wrapper from "./components/wrapper/Wrapper";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 3000);
  })
  return (
    <div className="body-copyright-light">
      {loading && <PreLoader/>}
      {!loading && <Wrapper/>}
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
