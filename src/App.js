
import './App.css';
import Weather from "./Weather"
import Footer from "./footer"

function App() {
  return (
    <div className="MainContent">
      <div className="App">
        <h1> Weather Search Engine </h1>
        <hr />
        <Weather />
      </div>
        <Footer />
    </div>
  );
}

export default App;
