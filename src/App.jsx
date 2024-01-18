import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Others/Contact/Contact';
import Nav from "./Pages/Others/Nav/Nav"
import NotFound from './Pages/Others/NotFound/NotFound';

function App() {
  return (
    <>
    <div className=''>
      <Nav></Nav>
      <Home></Home>
      <NotFound></NotFound>
      <Contact></Contact>
      
    </div>
    </>
    
  );
}

export default App;
