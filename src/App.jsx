import { Route, Routes } from 'react-router';
import './App.css';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home';
import About from './Pages/Others/About/About';
import Cart from './Pages/Others/Cart/Cart';
import CheckOut from './Pages/Others/CheckOut/CheckOut';
import Contact from './Pages/Others/Contact/Contact';
import Footer from './Pages/Others/Footer/Footer';
import Nav from "./Pages/Others/Nav/Nav"
import NotFound from './Pages/Others/NotFound/NotFound';
import Shop from './Pages/Others/Shop/Shop';
import SingleProduct from './Pages/Others/Shop/SingleProduct';
import Blogs from './Pages/Others/blog/Blogs';
import SingleBlog from './Pages/Others/blog/SingleBlog';
import Test1 from './Pages/Others/Test/Test1';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <div className=''>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<Shop></Shop>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/check' element={<CheckOut></CheckOut>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/sp' element={<SingleProduct></SingleProduct>}></Route>
          <Route path='/sb' element={<SingleBlog></SingleBlog>}></Route>
          <Route path='/test' element={<Test1></Test1>}></Route>
          <Route path='/Dash' element={<Dashboard></Dashboard>}></Route>

        </Routes>
        <Footer></Footer>
      </div>
    </>

  );
}

export default App;

// return (
//   <div className='max-w-7x1 mx-auto px-12'>
//     <Navbar></Navbar>
//     <Routes>
//       <Route path='/' element={<Home></Home>}></Route>
//       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
//       <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
//       <Route path='/contact' element={<Contact></Contact>}></Route>
//       <Route path='/login' element={<Login></Login>}></Route>
//       <Route path='/register' element={<Register></Register>}></Route>

//       <Route path='/purchase/:id' element={
//         <RequireAuth>
//           <PurchaseItems></PurchaseItems>
//         </RequireAuth>
//       }></Route>

//       <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
//         <Route index element={<MyProfile></MyProfile>}></Route>

//         <Route path='myorder' element={<MyOrder></MyOrder>}></Route>

//         <Route path='manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
//         <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>

//         <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>

//         <Route path='update' element={<UpdateProfile></UpdateProfile>}></Route>

//         <Route path='review' element={<AddReview></AddReview>}></Route>

//         <Route path='alluser' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>

//         <Route path='payment/:id' element={<Payment></Payment>}></Route>

//       </Route>

//       <Route path='*' element={<NotFound></NotFound>}></Route>

//     </Routes>

//   </div>
// );