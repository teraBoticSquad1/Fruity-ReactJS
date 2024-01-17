import './App.css';
import Home from './Pages/Home/Home';
import Nav from "./Pages/Others/Nav/Nav"
import NotFound from './Pages/Others/NotFound/NotFound';

function App() {
  return (
    <>
    <div className=''>
      <Nav></Nav>
      <Home></Home>
      <NotFound></NotFound>
      
    </div>
    </>
    
  );
}

export default App;
