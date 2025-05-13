import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  styled,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useMediaQuery,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Code as CodeIcon,
  Cloud as CloudIcon,
  PhoneAndroid as MobileIcon,
  ShoppingCart as EcommerceIcon,
  Storage as DatabaseIcon,
  Api as ApiIcon,
  Engineering as ExpertiseIcon,
  Support as SupportIcon,
  CheckCircle as CheckCircleIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
  AccountBalance as FinanceIcon,
  LocalHospital as HealthcareIcon,
  Store as RetailIcon,
  School as EducationIcon,
  Factory as ManufacturingIcon,
  Business as BusinessIcon,
  SmartToy as SmartToyIcon,
} from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(0, 0, 0, 0.05)',
  background: '#FFFFFF',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.secondary.main,
    '& .icon-wrapper': {
      background: theme.palette.secondary.main,
      color: '#fff',
    },
    '& .service-title': {
      color: theme.palette.secondary.main,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '1.75rem',
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url("https://i.postimg.cc/qvnC3Zjb/digitalsolution.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(12),
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
});

const IndustryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
    '& .industry-image': {
      transform: 'scale(1.1)',
    },
    '& .industry-icon': {
      backgroundColor: theme.palette.secondary.main,
    }
  }
}));

const IndustryImage = styled('div')(({ theme }) => ({
  height: 200,
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease-in-out',
  }
}));

const IndustryIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: -30,
  right: 20,
  transition: 'all 0.3s ease-in-out',
  zIndex: 2,
  '& svg': {
    fontSize: 30,
    color: 'white',
  }
}));

const IndustryContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3, 3),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const seoKeywords = [
    'IT solutions company',
    'software development services',
    'custom web development',
    'Salesforce solutions',
    'mobile app development',
    'enterprise software development',
    'cloud computing services',
    'digital transformation',
    'API development',
    'database solutions',
    'e-commerce development',
    'IT consulting services',
    'software development company',
    'technology solutions provider',
    'custom software development',
    'web application development',
    'enterprise IT solutions',
    'business process automation',
    'system integration services',
    'technology consulting',
    'AI agents development',
    'artificial intelligence solutions',
    'task automation',
    'intelligent workflows',
    'custom AI development'
  ].join(', ');

  const seoDescription = 'OneTechFuse - Leading provider of custom software development, Salesforce solutions, mobile apps, and enterprise IT services. Transform your business with our innovative technology solutions and expert consulting services.';

  const handleServiceClick = (service: string) => {
    const path = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(path);
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Create powerful web applications that drive your business forward.',
      icon: <CodeIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/onetechfuse-web-development-p1pR2oVeO4TsjA1VAyh2vPGmVqSBre.jpg',
      features: [
        'Frontend Development',
        'Backend Development',
        'UI/UX Design',
        'Cloud Solutions',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      icon: <MobileIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/app-development-3Zp0UCYX1TamDpzMpT2jcrWmZWG9W0.jpg',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'App Maintenance',
      ],
    },
    {
      title: 'AI Agents',
      description: 'Leverage custom AI agents to automate tasks and enhance business operations.',
      icon: <PsychologyIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/onetechfuseAiAgent-7fXwfAtgIQZUhKPbAfl71TkN3WoTGH.png',
      features: [
        'Task Automation',
        'Intelligent Workflows',
        'Natural Language Processing',
        'Custom AI Solutions',
      ],
    },
    {
      title: 'Salesforce Solutions',
      description: 'Transform your business with powerful Salesforce solutions.',
      icon: <CloudIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/salesforce-2IoordkzMkY4qg530X9E9JhcnaTAEM.jpg',
      features: [
        'Sales Cloud',
        'Service Cloud',
        'Custom Development',
        'Integration Services',
      ],
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Create online stores that drive sales and growth.',
      icon: <EcommerceIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/e-commerce-o1P82DGou37aP4fVwEJoch9KKWG9Vu.jpg',
      features: [
        'Online Store Setup',
        'Payment Integration',
        'Inventory Management',
        'Order Processing',
      ],
    },
    {
      title: 'Database Solutions',
      description: 'Design and implement robust database solutions for your business.',
      icon: <DatabaseIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/database_sol-VZRkArvkMztYHGNG633kA3jYcY7SLA.jpg',
      features: [
        'Database Design',
        'Data Migration',
        'Performance Optimization',
        'Backup Solutions',
      ],
    },
    {
      title: 'API Development',
      description: 'Build scalable and secure APIs for your applications.',
      icon: <ApiIcon />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/Api-development-image-WC1nZ9gNnXyxGcOXYc2rhguL2vRICi.png',
      features: [
        'RESTful APIs',
        'GraphQL APIs',
        'API Integration',
        'API Security',
      ],
    },
  ];

  const industries = [
    {
      title: 'Financial Services',
      icon: <FinanceIcon sx={{ fontSize: 40 }} />,
      description: 'Digital solutions for banking, insurance, and financial institutions.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/finance-img-7yUzG2ZfhMRc1vxqXnXTw1Tm7Lxn0y.png'
    },
    {
      title: 'Healthcare',
      icon: <HealthcareIcon sx={{ fontSize: 40 }} />,
      description: 'Healthcare software solutions for improved patient care and management.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/healthcare-J8STQo4Ek24EngTkaLHrE4Tb4iNX2Z.jpg'
    },
    {
      title: 'Retail',
      icon: <RetailIcon sx={{ fontSize: 40 }} />,
      description: 'E-commerce and retail management solutions for modern businesses.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/retail-solutions-HrLyogLb3FAHiO3LSLVh1RLGurJgwp.png'
    },
    {
      title: 'Education',
      icon: <EducationIcon sx={{ fontSize: 40 }} />,
      description: 'Educational technology solutions for institutions and learners.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/Education-27Ma3kCTgpOgGoaOIXYvJq3tIKn0AF.jpeg'
    },
    {
      title: 'Manufacturing',
      icon: <ManufacturingIcon sx={{ fontSize: 40 }} />,
      description: 'Industry 4.0 solutions for manufacturing and production.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/manufacturing1-7hZWSSRazxigN3Yl8y4yJ5yWTE3L4k.jpeg'
    },
    {
      title: 'Business Services',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      description: 'Enterprise solutions for business process optimization.',
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/Business%20Services-6dhiQWPb7NFN8qcVIf4ioz9ixWtGvm.jpg'
    },
  ];

  const whyChooseUs = [
    {
      icon: <SpeedIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising on quality and reliability.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security measures to protect your valuable data.',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Expert Team',
      description: 'Access to certified professionals with extensive experience.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>OneTechFuse | Custom Software Development & IT Solutions</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="OneTechFuse | Custom Software Development & IT Solutions" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onetechfuse.in" />
        <meta property="og:image" content="https://onetechfuse.in/images/hero-banner.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OneTechFuse | Custom Software Development & IT Solutions" />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://onetechfuse.in/images/hero-banner.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://onetechfuse.in" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OneTechFuse",
              "url": "https://onetechfuse.in",
              "logo": "https://onetechfuse.in/images/logo.png",
              "description": "${seoDescription}",
              "sameAs": [
                "https://www.linkedin.com/company/onetechfuse",
                "https://twitter.com/onetechfuse",
                "https://github.com/onetechfuse"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "email": "contact@onetechfuse.in"
              },
              "offers": {
                "@type": "AggregateOffer",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Web Development Services",
                    "description": "Custom web solutions tailored to your business needs"
                  },
                  {
                    "@type": "Offer",
                    "name": "Salesforce Solutions",
                    "description": "Expert Salesforce consulting and implementation"
                  },
                  {
                    "@type": "Offer",
                    "name": "Mobile Development",
                    "description": "Native and cross-platform mobile applications"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <Box>
        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '1.0rem', md: '3.0rem' },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Transform Your Business with Technology
                </Typography>
                <Typography 
                  variant="h5"
                  sx={{ 
                    maxWidth: '800px',
                    opacity: 0.9,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    lineHeight: 1.3,
                    mb: 4,
                  }}
                >
                  Custom software solutions that drive innovation and growth
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      boxShadow: '0 8px 24px rgba(255, 77, 77, 0.3)',
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    onClick={() => navigate('/services')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.105rem',
                      fontWeight: 400,
                      borderRadius: 1.5,
                      borderWidth: 1.5,
                    }}
                  >
                    Our Services
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        {/* Our Services Section */}
        <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
          <Container>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, color: 'primary.main' }}
            >
              Our Services
            </Typography>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.1)',
                      },
                      cursor: 'pointer',
                    }}
                    onClick={() => handleServiceClick(service.title)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            backgroundColor: 'primary.main',
                            borderRadius: 1,
                            p: 1,
                            mr: 2,
                            color: 'white',
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography variant="h5" component="h3" color="primary.main">
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <List dense>
                        {service.features.map((feature, idx) => (
                          <ListItem key={idx} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon color="secondary" sx={{ fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Industries We Serve Section */}
        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
          <Container>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, color: 'primary.main' }}
            >
              Industries We Serve
            </Typography>
            <Grid container spacing={4}>
              {industries.map((industry, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <IndustryCard>
                    <IndustryImage>
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="industry-image"
                      />
                      <IndustryIcon className="industry-icon">
                        {industry.icon}
                      </IndustryIcon>
                    </IndustryImage>
                    <IndustryContent>
                      <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                        {industry.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {industry.description}
                      </Typography>
                    </IndustryContent>
                  </IndustryCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 6, sm: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, sm: 6, md: 4 }}>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    }}
                  >
                    10+
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      opacity: 0.9,
                    }}
                  >
                    Years Experience
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    }}
                  >
                    50+
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      opacity: 0.9,
                    }}
                  >
                    Projects Completed
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    }}
                  >
                    30+
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      opacity: 0.9,
                    }}
                  >
                    Expert Developers
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    }}
                  >
                    100%
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      opacity: 0.9,
                    }}
                  >
                    Client Satisfaction
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
          <Container>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, color: 'primary.main' }}
            >
              Why Choose Us
            </Typography>
            <Grid container spacing={4}>
              {whyChooseUs.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%', textAlign: 'center' }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom color="primary">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              p: { xs: 4, sm: 6, md: 8 },
              borderRadius: 4,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4, 
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                px: { xs: 2, sm: 0 },
              }}
            >
              Let's discuss how we can help you achieve your technology goals
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(255, 77, 77, 0.3)',
              }}
            >
              Schedule Free Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home; 