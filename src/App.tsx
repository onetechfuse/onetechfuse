import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Helmet } from 'react-helmet';
import theme from './theme';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileDevelopment from './pages/services/MobileDevelopment';
import SalesforceSolutions from './pages/services/SalesforceSolutions';
import Services from './pages/Services';
import Industries from './pages/Industries';
import ApiDevelopment from './pages/services/ApiDevelopment';
import EcommerceSolutions from './pages/services/EcommerceSolutions';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Helmet>
          {/* Default Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#1A1A1A" />
          
          {/* Default SEO Tags */}
          <title>OneTechFuse | Leading IT Solutions & Software Development Company</title>
          <meta name="description" content="OneTechFuse provides cutting-edge IT solutions, custom software development, mobile apps, web development, and Salesforce solutions. Transform your business with our expert services." />
          <meta name="keywords" content="IT solutions, software development, web development, mobile apps, Salesforce solutions, digital transformation, technology consulting" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="OneTechFuse" />
          <meta property="og:image" content="https://onetechfuse.in/images/og-image.jpg" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@onetechfuse" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://onetechfuse.in" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          
          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />
        </Helmet>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/salesforce-solutions" element={<SalesforceSolutions />} />
          <Route path="/services/api-development" element={<ApiDevelopment />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
