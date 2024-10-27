import logo from "./logo.svg";
import "./App.css";
import PatternList from "./components/PatternList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Fonalbaba.hu</h1>
      <PatternList />
    </div>
  );
}

export default App;
