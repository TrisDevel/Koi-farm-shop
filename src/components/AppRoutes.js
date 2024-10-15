import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotificationBar from '../components/NotificationBar';
import PrivateRoute from '../components/PrivateRoute'; // Import PrivateRoute
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext

// Pages
import Home from '../pages/Home';
import KoiList from '../pages/KoiList';
import KoiDetails from '../pages/KoiDetails';
import Consignment from '../pages/Consignment';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserProfile from '../pages/UserProfile';
import Contact from '../pages/Contact';
import About from '../pages/About';
import FAQs from '../pages/FAQs';
import Cart from '../pages/Cart';
import ConsignmentPolicy from '../pages/ConsignmentPolicy';
import PaymentInfo from '../pages/PaymentInfo';
import Payment from '../pages/Payment';
import { CartProvider } from '../contexts/CartContext';

// Admin Layout
import Admin from '../Admin/layouts/Admin';
import Dashboard from '../Admin/views/Dashboard';
import Customer from '../Admin/views/Customer';
import Product from '../Admin/views/Product';
import Notification from '../Admin/views/Notification';
import Order from '../Admin/views/Order';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute ? (
        <CartProvider>
          <div className="App d-flex flex-column min-vh-100">
            <AppNavbar fixed="top" />
            <Container fluid className="flex-grow-1 p-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/koi" element={<KoiList />} />
                <Route path="/koi/:id" element={<KoiDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/ConsignmentPolicy" element={<ConsignmentPolicy />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/paymentinfo" element={<PaymentInfo />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/consignment" element={<Consignment />} />
                  <Route path="/user-profile" element={<UserProfile />} />
                </Route>
              </Routes>
            </Container>
            <Footer />
            <NotificationBar />
          </div>
        </CartProvider>
      ) : (
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
            <Route path="product" element={<Product />} />
            <Route path="notification" element={<Notification />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
