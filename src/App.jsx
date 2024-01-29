import './App.css';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home';
import Cart from './Pages/Others/Cart/Cart';
import CheckOut from './Pages/Others/CheckOut/CheckOut';
import Contact from './Pages/Others/Contact/Contact';
import Nav from "./Pages/Others/Nav/Nav"
import NotFound from './Pages/Others/NotFound/NotFound';
import Blogs from './Pages/Others/blog/Blogs';

function App() {
  return (
    <>
    <div className=''>
      <Nav></Nav>
      <Home></Home>
      <NotFound></NotFound>
      <Contact></Contact>
      <CheckOut></CheckOut>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <Cart></Cart>
      <Blogs></Blogs>
    </div>
    </>
    
  );
}

export default App;
