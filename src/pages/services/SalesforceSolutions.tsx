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
  Cloud,
  Settings,
  Link,
  Analytics,
  Security,
  Speed,
  Support,
  Brush,
  Storage,
  Api,
  ShoppingCart,
  BugReport,
  Update,
} from '@mui/icons-material';

const SalesforceSolutions: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Sales Cloud Implementation',
      description: 'Optimize your sales processes with Salesforce Sales Cloud solutions.',
      icon: <Cloud />,
      benefits: [
        'Lead management',
        'Opportunity tracking',
        'Sales forecasting',
        'Pipeline management',
        'Territory management',
        'Sales analytics',
      ],
    },
    {
      title: 'Service Cloud Solutions',
      description: 'Deliver exceptional customer service with Salesforce Service Cloud.',
      icon: <Support />,
      benefits: [
        'Case management',
        'Knowledge base',
        'Omni-channel support',
        'Customer portal',
        'Service analytics',
        'Field service',
      ],
    },
    {
      title: 'Custom Development',
      description: 'Tailored Salesforce solutions to meet your specific business needs.',
      icon: <Settings />,
      benefits: [
        'Custom objects',
        'Apex development',
        'Lightning components',
        'Visualforce pages',
        'Process automation',
        'Custom integrations',
      ],
    },
    {
      title: 'Integration Services',
      description: 'Seamlessly connect Salesforce with your existing systems.',
      icon: <Link />,
      benefits: [
        'API integration',
        'Data migration',
        'Third-party apps',
        'Web services',
        'Real-time sync',
        'ETL processes',
      ],
    },
    {
      title: 'Analytics & Reporting',
      description: 'Powerful analytics and reporting solutions for data-driven decisions.',
      icon: <Analytics />,
      benefits: [
        'Custom dashboards',
        'Advanced reports',
        'Data visualization',
        'Predictive analytics',
        'KPI tracking',
        'Business intelligence',
      ],
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions.',
      icon: <Security />,
      benefits: [
        'Access control',
        'Data encryption',
        'Audit trails',
        'Compliance reporting',
        'Security monitoring',
        'Backup solutions',
      ],
    },
  ];

  const technologies = [
    { name: 'Salesforce Core', items: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud', 'Experience Cloud'] },
    { name: 'Development', items: ['Apex', 'Lightning', 'Visualforce', 'LWC', 'Heroku'] },
    { name: 'Integration', items: ['REST API', 'SOAP API', 'Bulk API', 'Heroku', 'MuleSoft'] },
    { name: 'Analytics', items: ['Tableau', 'Einstein Analytics', 'Reports', 'Dashboards', 'Wave Analytics'] },
    { name: 'Security', items: ['Shield', 'Identity', 'Access Control', 'Encryption', 'Compliance'] },
    { name: 'DevOps', items: ['DX', 'Git', 'Jenkins', 'Copado', 'Gearset'] },
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
                Salesforce Solutions
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Transform your business with comprehensive Salesforce solutions that drive growth and efficiency.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/salesforce-hero.svg"
                alt="Salesforce Solutions"
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
          Our Salesforce Solutions
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
          Why Choose Our Salesforce Solutions?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Rapid Implementation
              </Typography>
              <Typography color="text.secondary">
                Quick deployment of Salesforce solutions with minimal disruption to your business.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Enterprise Security
              </Typography>
              <Typography color="text.secondary">
                Enterprise-grade security and compliance features to protect your data.
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
                Round-the-clock support and maintenance to keep your Salesforce instance running smoothly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SalesforceSolutions; 