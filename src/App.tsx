import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileDevelopment from './pages/services/MobileDevelopment';
import SalesforceSolutions from './pages/services/SalesforceSolutions';
import Services from './pages/Services';
import ApiDevelopment from './pages/services/ApiDevelopment';
import EcommerceSolutions from './pages/services/EcommerceSolutions';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/salesforce-solutions" element={<SalesforceSolutions />} />
          <Route path="/services/api-development" element={<ApiDevelopment />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Industry Routes */}
          <Route path="/industries/financial-services" element={<div>Coming Soon</div>} />
          <Route path="/industries/information-technology" element={<div>Coming Soon</div>} />
          <Route path="/industries/manufacturing" element={<div>Coming Soon</div>} />
          <Route path="/industries/nonprofit" element={<div>Coming Soon</div>} />
          <Route path="/industries/retail" element={<div>Coming Soon</div>} />
          <Route path="/industries/healthcare" element={<div>Coming Soon</div>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
