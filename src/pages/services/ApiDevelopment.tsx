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
  Api,
  Security,
  Speed,
  Support,
  Cloud,
  Code,
  Storage,
  Link,
  Analytics,
  BugReport,
  Update,
} from '@mui/icons-material';

const ApiDevelopment: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'RESTful API Development',
      description: 'Design and implement scalable RESTful APIs following best practices.',
      icon: <Api />,
      benefits: [
        'API architecture design',
        'Resource modeling',
        'Versioning strategies',
        'Rate limiting',
        'Caching implementation',
        'Documentation (Swagger/OpenAPI)',
      ],
    },
    {
      title: 'GraphQL Development',
      description: 'Build flexible and efficient GraphQL APIs for modern applications.',
      icon: <Code />,
      benefits: [
        'Schema design',
        'Resolver implementation',
        'Query optimization',
        'Subscriptions',
        'Federation',
        'Performance tuning',
      ],
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate third-party APIs and services.',
      icon: <Link />,
      benefits: [
        'OAuth implementation',
        'API key management',
        'Webhook setup',
        'Error handling',
        'Retry mechanisms',
        'Circuit breakers',
      ],
    },
    {
      title: 'API Security',
      description: 'Implement robust security measures to protect your APIs.',
      icon: <Security />,
      benefits: [
        'Authentication',
        'Authorization',
        'JWT implementation',
        'API key security',
        'Rate limiting',
        'Input validation',
      ],
    },
    {
      title: 'API Testing',
      description: 'Comprehensive testing solutions for API reliability.',
      icon: <BugReport />,
      benefits: [
        'Unit testing',
        'Integration testing',
        'Load testing',
        'Security testing',
        'Performance testing',
        'API monitoring',
      ],
    },
    {
      title: 'API Maintenance',
      description: 'Ongoing support and maintenance for your APIs.',
      icon: <Update />,
      benefits: [
        'Version management',
        'Performance optimization',
        'Security updates',
        'Documentation updates',
        'Monitoring setup',
        'Incident response',
      ],
    },
  ];

  const technologies = [
    { name: 'API Development', items: ['Node.js', 'Python', 'Java', 'Go', 'Ruby'] },
    { name: 'Frameworks', items: ['Express', 'FastAPI', 'Spring Boot', 'Gin', 'Rails'] },
    { name: 'API Standards', items: ['REST', 'GraphQL', 'gRPC', 'SOAP', 'WebSocket'] },
    { name: 'Security', items: ['OAuth', 'JWT', 'API Keys', 'OIDC', 'SAML'] },
    { name: 'Testing', items: ['Postman', 'Jest', 'Pytest', 'JUnit', 'Cypress'] },
    { name: 'Monitoring', items: ['Prometheus', 'Grafana', 'New Relic', 'Datadog', 'ELK'] },
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
                API Development
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Build robust and scalable APIs that power your applications with modern technologies and best practices.
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/api-hero.svg"
                alt="API Development"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  display: { xs: 'none', md: 'block' },
                  mx: 'auto',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.2))',
                }}
              />
            </Grid> */}
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
          Our API Development Services
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
          Why Choose Our API Development Services?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Fast Development
              </Typography>
              <Typography color="text.secondary">
                Rapid API development with modern tools and frameworks for quick deployment.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Secure APIs
              </Typography>
              <Typography color="text.secondary">
                Enterprise-grade security features to protect your API endpoints and data.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Support sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Ongoing Support
              </Typography>
              <Typography color="text.secondary">
                Continuous support and maintenance to keep your APIs running smoothly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ApiDevelopment; 