import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <h1> Weather React Project App </h1>
     <Weather />
     <footer>
       This project was coded by{" "}
       Tessa D. A. {" "}
       <a href="https://github.com/pandaqueen4799/projectweatherreactapp/tree/master/src"
       target="_blank" rel="noreferrer">
         open-sourced on GitHub
       </a>
     </footer>

</div>
    </div>
  );
}


