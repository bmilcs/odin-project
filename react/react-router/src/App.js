import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <p>
        <Link to="/profile">Goto Profile</Link>
      </p>
      <Link to="/beef">Cause an error</Link>
    </div>
  );
}

export default App;
