import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  styled,
  useTheme,
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
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 40px rgba(92, 98, 249, 0.2)',
    borderColor: theme.palette.secondary.main,
    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
    '& .icon-wrapper': {
      background: theme.palette.secondary.main,
      color: '#fff',
    },
    '& .service-title': {
      color: '#fff',
    },
    '& .service-description': {
      color: 'rgba(255, 255, 255, 0.9)',
    },
    '& .feature-text': {
      color: 'rgba(255, 255, 255, 0.95)',
    },
    '& .feature-icon': {
      color: theme.palette.secondary.light,
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

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    const path = `/services/${service.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(path);
  };

  const services = [
    {
      title: 'Web Development',
      icon: <CodeIcon />,
      description: 'Custom web solutions tailored to your business needs with modern technologies.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization'],
    },
    {
      title: 'Salesforce Solutions',
      icon: <CloudIcon />,
      description: 'Expert Salesforce consulting, implementation, and customization services.',
      features: ['Implementation', 'Customization', 'Integration'],
    },
    {
      title: 'Mobile Development',
      icon: <MobileIcon />,
      description: 'Native and cross-platform mobile applications for exceptional experiences.',
      features: ['iOS Development', 'Android Development', 'Cross-platform'],
    },
    {
      title: 'E-Commerce Solutions',
      icon: <EcommerceIcon />,
      description: 'Scalable e-commerce platforms that drive sales and engagement.',
      features: ['Online Store', 'Payment Integration', 'Inventory Management'],
    },
    {
      title: 'Database Solutions',
      icon: <DatabaseIcon />,
      description: 'Robust database design and management for optimal data organization.',
      features: ['Data Modeling', 'Performance Tuning', 'Migration Services'],
    },
    {
      title: 'API Development',
      icon: <ApiIcon />,
      description: 'RESTful and GraphQL APIs for seamless system integration.',
      features: ['API Design', 'Documentation', 'Security'],
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
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2B2D42 0%, #5C62F9 100%)',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Your Journey To Excellence Starts Here
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  opacity: 0.9,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                We bring sustainable growth to your business through innovative technology solutions
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(92, 98, 249, 0.3)',
                }}
              >
                Schedule Free Consultation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Optimize Your Business With Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Choose from our comprehensive range of technology solutions designed to drive your business forward
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <StyledPaper onClick={() => handleServiceClick(service.title)}>
                <IconWrapper className="icon-wrapper">
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  className="service-title"
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    mb: 1
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  className="service-description" 
                  sx={{ 
                    mb: 2,
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}
                >
                  {service.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  {service.features.map((feature, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 0.75
                      }}
                    >
                      <CheckCircleIcon 
                        className="feature-icon"
                        sx={{ 
                          mr: 1, 
                          color: 'primary.main', 
                          fontSize: '1rem' 
                        }} 
                      />
                      <Typography 
                        variant="body2"
                        className="feature-text"
                        sx={{ fontSize: '0.85rem' }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Why Choose OneTechFuse
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Partner with us for innovative solutions and exceptional results
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  {item.icon}
                  <Typography variant="h5" sx={{ my: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  color="primary.main" 
                  sx={{ 
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  10+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Years Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  color="primary.main"
                  sx={{ 
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  50+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Projects Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  color="primary.main"
                  sx={{ 
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  30+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Expert Developers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  color="primary.main"
                  sx={{ 
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  100%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Client Satisfaction
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 8 },
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
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 