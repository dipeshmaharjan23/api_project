import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Category } from './components/Category';
import { Search } from './components/Search';
import Page from './pages/Page';
// import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Search/>
      <Category />
      <Page/>    
    </div>
    </Router>
  );
}

export default App;
