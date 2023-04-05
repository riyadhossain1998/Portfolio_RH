import Quora from './Components/Quora'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
    
  );
}

export default App;
