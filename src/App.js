import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Babisha Shrestha{" "}
          <a href="https://github.com/Babi1232/weather-app">
            {" "}
            Open-source on github
          </a>
        </footer>
      </div>
    </div>
  );
}
