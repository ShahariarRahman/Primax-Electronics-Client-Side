import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory/ManageInventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import AddItem from './Pages/AddItem/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import MyItems from './Pages/MyItems/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import About from './Pages/About/About/About';
import EmailVerification from './Pages/Login/EmailVerification/EmailVerification';

function App() {
  return (
    <div className='flex flex-col items-center bg-black'>
      <Header></Header>
      <div className='max-w-screen-2xl w-full min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/emailverification" element={<EmailVerification />}></Route>

          <Route path="/manageinventory" element={<RequireAuth><ManageInventory /></RequireAuth>}></Route>
          <Route path="/additem" element={<RequireAuth><AddItem /></RequireAuth>}></Route>
          <Route path="/inventory/:inventoryItemId" element={<RequireAuth><Inventory /></RequireAuth>}> </Route>
          <Route path="/myitems" element={<RequireAuth><MyItems /></RequireAuth>}> </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
