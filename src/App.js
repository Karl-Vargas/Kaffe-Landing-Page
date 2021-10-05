import './App.css';
import Navbar from './Components/Navbar';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './Components/Pages/Home';
import SpecialtyCoffee from './Components/SpecialtyCoffee';
import OurStory from './Components/OurStory';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/specialtycoffee' component={SpecialtyCoffee} />
        <Route path='/ourstory' component={OurStory} />
        <Route path='/signup' component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
