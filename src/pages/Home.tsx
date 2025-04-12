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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
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

  const industries = [
    {
      title: 'Financial Services',
      icon: <FinanceIcon />,
      description: 'Digital solutions for banking, insurance, and financial institutions.',
    },
    {
      title: 'Healthcare',
      icon: <HealthcareIcon />,
      description: 'Healthcare software solutions for improved patient care and management.',
    },
    {
      title: 'Retail',
      icon: <RetailIcon />,
      description: 'E-commerce and retail management solutions for modern businesses.',
    },
    {
      title: 'Education',
      icon: <EducationIcon />,
      description: 'Educational technology solutions for institutions and learners.',
    },
    {
      title: 'Manufacturing',
      icon: <ManufacturingIcon />,
      description: 'Industry 4.0 solutions for manufacturing and production.',
    },
    {
      title: 'Business Services',
      icon: <BusinessIcon />,
      description: 'Enterprise solutions for business process optimization.',
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
          background: 'linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url("https://i.postimg.cc/qvnC3Zjb/digitalsolution.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Digital Solutions for Modern Businesses
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  opacity: 0.9,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                We help businesses transform their digital presence with cutting-edge technology solutions
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
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    borderWidth: 2,
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Comprehensive technology solutions to help your business thrive in the digital age
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledPaper onClick={() => handleServiceClick(service.title)}>
                <IconWrapper className="icon-wrapper">
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="h5" 
                  className="service-title"
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  className="service-description"
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                  }}
                >
                  {service.description}
                </Typography>
                <List>
                  {service.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon color="secondary" sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
                        className="feature-text"
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            fontSize: { xs: '0.875rem', md: '1rem' },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Industries Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Industries We Serve
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.25rem' },
                px: { xs: 2, sm: 0 },
              }}
            >
              Tailored solutions for various industries to meet their unique needs
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {industries.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        '& svg': {
                          fontSize: '2.5rem',
                        },
                      }}
                    >
                      {industry.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.125rem' },
                      }}
                    >
                      {industry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Our commitment to excellence and innovation sets us apart
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {item.icon}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    my: 2, 
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

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
  );
};

export default Home; 