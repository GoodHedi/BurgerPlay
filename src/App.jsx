import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Franchise from './pages/Franchise.jsx';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
<Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </>
  );
}
