import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  CheckCircle,
  ShoppingCart,
  Security,
  Speed,
  Support,
  Cloud,
  Payment,
  Analytics,
  Inventory,
  LocalShipping,
  Brush,
  BugReport,
  Update,
} from '@mui/icons-material';

const EcommerceSolutions: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'E-commerce Platform Development',
      description: 'Custom e-commerce solutions built with modern technologies.',
      icon: <ShoppingCart />,
      benefits: [
        'Custom store development',
        'Multi-vendor marketplace',
        'Subscription models',
        'Digital products',
        'Membership systems',
        'Multi-currency support',
      ],
    },
    {
      title: 'Payment Integration',
      description: 'Seamless payment processing with multiple payment gateways.',
      icon: <Payment />,
      benefits: [
        'Payment gateway integration',
        'Multiple payment methods',
        'Secure transactions',
        'Subscription billing',
        'Refund management',
        'Fraud prevention',
      ],
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive inventory and order management solutions.',
      icon: <Inventory />,
      benefits: [
        'Stock tracking',
        'Order management',
        'Warehouse integration',
        'Barcode scanning',
        'Low stock alerts',
        'Bulk operations',
      ],
    },
    {
      title: 'Shipping Integration',
      description: 'Automated shipping and delivery solutions.',
      icon: <LocalShipping />,
      benefits: [
        'Carrier integration',
        'Shipping rate calculation',
        'Tracking management',
        'Label generation',
        'International shipping',
        'Delivery scheduling',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design for optimal shopping experience.',
      icon: <Brush />,
      benefits: [
        'Responsive design',
        'Mobile optimization',
        'User testing',
        'Conversion optimization',
        'Accessibility compliance',
        'Brand consistency',
      ],
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for business growth.',
      icon: <Analytics />,
      benefits: [
        'Sales analytics',
        'Customer insights',
        'Inventory reports',
        'Performance metrics',
        'Custom dashboards',
        'Export capabilities',
      ],
    },
  ];

  const technologies = [
    { name: 'Platforms', items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom Solutions'] },
    { name: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Java', 'Ruby on Rails'] },
    { name: 'Payment', items: ['Stripe', 'PayPal', 'Square', 'Authorize.net', 'Razorpay'] },
    { name: 'Shipping', items: ['ShipStation', 'Shippo', 'EasyPost', 'FedEx', 'UPS'] },
    { name: 'Analytics', items: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Segment', 'Custom Reports'] },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/pattern.svg")',
            opacity: 0.1,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #fff 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                E-commerce Solutions
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Create powerful online stores that drive sales and growth with cutting-edge e-commerce solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/ecommerce-hero.svg"
                alt="E-commerce Solutions"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  display: { xs: 'none', md: 'block' },
                  mx: 'auto',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.2))',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
          }}
        >
          Our E-commerce Solutions
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
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
                <CardContent>
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
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {feature.description}
                  </Typography>
                  <List>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <ListItem key={benefitIndex}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technologies Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Technologies We Use
          </Typography>
          <Grid container spacing={4}>
            {technologies.map((tech, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {tech.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {tech.items.map((item, itemIndex) => (
                        <Box
                          key={itemIndex}
                          sx={{
                            px: 2,
                            py: 1,
                            bgcolor: 'primary.main',
                            color: 'white',
                            borderRadius: 2,
                            fontSize: '0.875rem',
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
          }}
        >
          Why Choose Our E-commerce Solutions?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Fast Development
              </Typography>
              <Typography color="text.secondary">
                Quick deployment of e-commerce solutions with minimal disruption to your business.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Secure Transactions
              </Typography>
              <Typography color="text.secondary">
                Enterprise-grade security features to protect customer data and transactions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Support sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                24/7 Support
              </Typography>
              <Typography color="text.secondary">
                Round-the-clock support to keep your online store running smoothly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EcommerceSolutions; 