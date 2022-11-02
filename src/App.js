import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Solutions from './components/Seções/Solutions';
import Clients from './components/Seções/Clients';
import Prices from './components/Seções/Prices';
import { Amostra } from './components/Seções/Amostra';
import Contact from './components/Seções/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/amostra" element={<Amostra />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
