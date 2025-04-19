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
  Code,
  Security,
  Speed,
  Support,
  Devices,
  Cloud,
  Brush,
  Storage,
  Web,
  Api,
  ShoppingCart,
  Analytics,
} from '@mui/icons-material';

const WebDevelopment: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: <Code />,
      benefits: [
        'React/Next.js development',
        'Responsive design',
        'Performance optimization',
        'Cross-browser compatibility',
        'Modern UI frameworks',
        'Progressive Web Apps (PWA)',
      ],
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure server-side solutions for your web applications.',
      icon: <Storage />,
      benefits: [
        'Node.js/Python development',
        'API development',
        'Database design',
        'Server optimization',
        'Microservices architecture',
        'Cloud integration',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences.',
      icon: <Brush />,
      benefits: [
        'Wireframing',
        'Prototyping',
        'User testing',
        'Design system implementation',
        'Accessibility compliance',
        'Mobile-first approach',
      ],
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and infrastructure setup.',
      icon: <Cloud />,
      benefits: [
        'AWS/Azure/GCP setup',
        'Cloud architecture',
        'DevOps implementation',
        'Scalability solutions',
        'Container orchestration',
        'Serverless applications',
      ],
    },
    {
      title: 'E-Commerce Development',
      description: 'Custom e-commerce solutions that drive sales and growth.',
      icon: <ShoppingCart />,
      benefits: [
        'Online store setup',
        'Payment integration',
        'Inventory management',
        'Order processing',
        'Multi-vendor marketplace',
        'Analytics integration',
      ],
    },
    {
      title: 'Web Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly.',
      icon: <Support />,
      benefits: [
        'Bug fixes',
        'Performance monitoring',
        'Security updates',
        'Content updates',
        'SEO optimization',
        'Analytics tracking',
      ],
    },
  ];

  const technologies = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails'] },
    { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'] },
    { name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku'] },
    { name: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions'] },
    { name: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress', 'Selenium', 'JUnit'] },
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
                Web Development
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Create powerful web applications that drive your business forward with cutting-edge technologies and best practices.
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/web-hero.svg"
                alt="Web Development"
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
          Our Web Development Services
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
          Why Choose Our Web Development Services?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Fast Development
              </Typography>
              <Typography color="text.secondary">
                Rapid development cycles with modern tools and frameworks for quick time-to-market.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Secure Applications
              </Typography>
              <Typography color="text.secondary">
                Built-in security features and best practices to protect user data and privacy.
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
                Continuous support and maintenance to keep your website running smoothly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebDevelopment; 