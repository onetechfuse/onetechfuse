import React from 'react';
import { Helmet } from 'react-helmet';
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
  Code,
  PhoneAndroid,
  Cloud,
  ShoppingCart,
  Storage,
  Api,
} from '@mui/icons-material';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Web Development',
      description: 'Create powerful web applications that drive your business forward.',
      icon: <Code />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/onetechfuse-web-development-p1pR2oVeO4TsjA1VAyh2vPGmVqSBre.jpg',
      path: '/services/web-development',
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
      icon: <PhoneAndroid />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/app-development-3Zp0UCYX1TamDpzMpT2jcrWmZWG9W0.jpg',
      path: '/services/mobile-development',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'App Maintenance',
      ],
    },
    {
      title: 'Salesforce Solutions',
      description: 'Transform your business with powerful Salesforce solutions.',
      icon: <Cloud />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/salesforce-2IoordkzMkY4qg530X9E9JhcnaTAEM.jpg',
      path: '/services/salesforce-solutions',
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
      icon: <ShoppingCart />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/e-commerce-o1P82DGou37aP4fVwEJoch9KKWG9Vu.jpg',
      path: '/services/ecommerce-solutions',
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
      icon: <Storage />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/database_sol-VZRkArvkMztYHGNG633kA3jYcY7SLA.jpg',
      path: '/services/database-solutions',
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
      icon: <Api />,
      image: 'https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/Api-development-image-WC1nZ9gNnXyxGcOXYc2rhguL2vRICi.png',
      path: '/services/api-development',
      features: [
        'RESTful APIs',
        'GraphQL APIs',
        'API Integration',
        'API Security',
      ],
    },
  ];

  const seoKeywords = [
    'IT services',
    'software development services',
    'web development company',
    'Salesforce consulting',
    'mobile app development',
    'custom software solutions',
    'enterprise software development',
    'cloud computing services',
    'API development services',
    'database solutions',
    'e-commerce development',
    'digital transformation services',
    'IT consulting',
    'system integration',
    'software maintenance',
    'technology consulting',
    'agile development',
    'DevOps services',
    'UI/UX design',
    'quality assurance'
  ].join(', ');

  const seoDescription = 'Comprehensive IT and software development services including web development, Salesforce solutions, mobile apps, cloud computing, and enterprise software. Expert consulting and implementation for digital transformation.';

  return (
    <>
      <Helmet>
        <title>IT & Software Development Services | OneTechFuse</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT & Software Development Services | OneTechFuse" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onetechfuse.in/services" />
        <meta property="og:image" content="https://onetechfuse.in/images/services-banner.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT & Software Development Services | OneTechFuse" />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://onetechfuse.in/images/services-banner.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://onetechfuse.in/services" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web solutions tailored to your business needs",
                  "provider": {
                    "@type": "Organization",
                    "name": "OneTechFuse"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Salesforce Solutions",
                  "description": "Expert Salesforce consulting and implementation services",
                  "provider": {
                    "@type": "Organization",
                    "name": "OneTechFuse"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Mobile Development",
                  "description": "Native and cross-platform mobile applications",
                  "provider": {
                    "@type": "Organization",
                    "name": "OneTechFuse"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Cloud Computing",
                  "description": "Cloud infrastructure and migration services",
                  "provider": {
                    "@type": "Organization",
                    "name": "OneTechFuse"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
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
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  Comprehensive technology solutions to help your business thrive in the digital age.
                </Typography>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="https://ktorbrdptkhds1wu.public.blob.vercel-storage.com/our-services-2VjKmuJfBTAe0OMzVhqZUHJsId8XMz.jpg"
                  alt="Our Services"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    display: { xs: 'none', md: 'block' },
                    mx: 'auto',
                  }}
                />
              </Grid> */}
            </Grid>
          </Container>
        </Box>

        {/* Services Grid */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
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
                    image={service.image}
                    alt={service.title}
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
                        {service.icon}
                      </Box>
                      <Typography variant="h5" component="h3">
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {service.features.map((feature, featureIndex) => (
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
                      to={service.path}
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
    </>
  );
};

export default Services; 