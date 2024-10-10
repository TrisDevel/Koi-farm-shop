import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KoiList from './pages/KoiList';
import KoiDetails from './pages/KoiDetails';
// import Order from './pages/Order';
import Consignment from './pages/Consignment';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Contact from './pages/Contact';
import About from './pages/About'
import FAQs from './pages/FAQs';
import Cart from  './pages/Cart';
import { CartProvider } from './contexts/CartContext'; // Nhập CartProvider
import NotificationBar from './components/NotificationBar';
import ConsignmentPolicy from './pages/ConsignmentPolicy';
import Payment from './pages/Payment';


function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <AppNavbar fixed="top" />
        <Container fluid className="flex-grow-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/koi" element={<KoiList />} />
            <Route path="/koi/:id" element={<KoiDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/consignment" element={<Consignment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/consignmentPolicy" element={<ConsignmentPolicy />} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </Container>
        <Footer />
        <NotificationBar /> {/* Thêm dòng này */}
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;