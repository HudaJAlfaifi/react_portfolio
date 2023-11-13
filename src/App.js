
import './App.css';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
<Navbar/>
<Home/>
<Aboutme/>
<Education/>
<Skill/>
<Work/>
<Contact/>

    </div>
  );
}

export default App;
