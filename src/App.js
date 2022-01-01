import './App.css';
import Navbar from './navbar/Navbar';
import TopNav from './navbar/TopNav';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <TopNav/>
      <Navbar/>
      </div>
      </Router>
  );
}

export default App;
