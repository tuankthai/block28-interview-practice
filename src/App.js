import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

export function About() {
  return <>ABOUT</>
}

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1>MAIN</h1>
      <button onClick={()=>navigate("/main")}>Main</button>
      <button onClick={()=>navigate("/About")}>About</button>
    </div>
  );
}

export default App;
