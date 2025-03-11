import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/salesforce-solutions" element={<div>Coming Soon</div>} />
              <Route path="/services/mobile-development" element={<div>Coming Soon</div>} />
              <Route path="/services/ecommerce-solutions" element={<div>Coming Soon</div>} />
              <Route path="/services/database-solutions" element={<div>Coming Soon</div>} />
              <Route path="/services/api-development" element={<div>Coming Soon</div>} />
              {/* Industry Routes */}
              <Route path="/industries/financial-services" element={<div>Coming Soon</div>} />
              <Route path="/industries/information-technology" element={<div>Coming Soon</div>} />
              <Route path="/industries/manufacturing" element={<div>Coming Soon</div>} />
              <Route path="/industries/nonprofit" element={<div>Coming Soon</div>} />
              <Route path="/industries/retail" element={<div>Coming Soon</div>} />
              <Route path="/industries/healthcare" element={<div>Coming Soon</div>} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
