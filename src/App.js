import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Babisha Shrestha on{" "}
          <a href="https://github.com/Babi1232/weather-app">
            {" "}
            Open-source on github
          </a>{" "}
          and{" "}
          <a href="https://deft-scone-7ed7cb.netlify.app/">hosted on netlify</a>
        </footer>
      </div>
    </div>
  );
}
