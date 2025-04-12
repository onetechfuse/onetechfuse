import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  AccountBalance,
  HealthAndSafety,
  LocalMall,
  School,
  Factory,
  BusinessCenter,
} from '@mui/icons-material';

const Industries: React.FC = () => {
  const theme = useTheme();

  const industriesList = [
    {
      title: 'Financial Services',
      description: 'Innovative solutions for banks, insurance companies, and financial institutions.',
      icon: <AccountBalance />,
      image: '/images/financial-services.jpg',
      path: '/industries/financial-services',
      features: [
        'Banking Solutions',
        'Insurance Systems',
        'Payment Processing',
        'Regulatory Compliance',
      ],
    },
    {
      title: 'Healthcare',
      description: 'Digital transformation for healthcare providers and medical organizations.',
      icon: <HealthAndSafety />,
      image: '/images/healthcare.jpg',
      path: '/industries/healthcare',
      features: [
        'Patient Management',
        'Medical Records',
        'Healthcare Analytics',
        'Telehealth Solutions',
      ],
    },
    {
      title: 'Retail',
      description: 'Technology solutions that enhance customer experience and boost sales.',
      icon: <LocalMall />,
      image: '/images/retail.jpg',
      path: '/industries/retail',
      features: [
        'E-commerce Platforms',
        'Inventory Management',
        'POS Systems',
        'Customer Loyalty',
      ],
    },
    {
      title: 'Education',
      description: 'Digital learning platforms and educational management systems.',
      icon: <School />,
      image: '/images/education.jpg',
      path: '/industries/education',
      features: [
        'Learning Management',
        'Student Information',
        'Virtual Classrooms',
        'Educational Analytics',
      ],
    },
    {
      title: 'Manufacturing',
      description: 'Solutions to optimize production processes and supply chain management.',
      icon: <Factory />,
      image: '/images/manufacturing.jpg',
      path: '/industries/manufacturing',
      features: [
        'Production Management',
        'Supply Chain Optimization',
        'Quality Control',
        'Resource Planning',
      ],
    },
    {
      title: 'Business Services',
      description: 'Improving operational efficiency for professional service firms.',
      icon: <BusinessCenter />,
      image: '/images/business-services.jpg',
      path: '/industries/business-services',
      features: [
        'CRM Solutions',
        'Workflow Automation',
        'Business Intelligence',
        'Document Management',
      ],
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
          pt: { xs: 10, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Industries We Serve
              </Typography>
              <Typography 
                variant="h5"
                sx={{ 
                  maxWidth: '800px',
                  opacity: 0.9,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.5,
                  mb: 4,
                }}
              >
                Specialized technology solutions tailored to the unique needs of your industry
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Industries Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {industriesList.map((industry, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={industry.image}
                  alt={industry.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: 'white',
                        mr: 2,
                      }}
                    >
                      {industry.icon}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {industry.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {industry.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {industry.features.map((feature, featureIndex) => (
                      <Typography
                        key={featureIndex}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    component={RouterLink}
                    to={industry.path}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries; 