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
  PhoneAndroid,
  PhoneIphone,
  Code,
  Security,
  Speed,
  Support,
  Devices,
  Cloud,
  Brush,
  Storage,
  Api,
  Analytics,
  BugReport,
  Update,
} from '@mui/icons-material';

const MobileDevelopment: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and SwiftUI for optimal performance.',
      icon: <PhoneIphone />,
      benefits: [
        'Swift/SwiftUI development',
        'iOS app store submission',
        'iPad optimization',
        'Apple Watch integration',
        'Push notifications',
        'In-app purchases',
      ],
    },
    {
      title: 'Android Development',
      description: 'Native Android applications using Kotlin and Jetpack Compose.',
      icon: <PhoneAndroid />,
      benefits: [
        'Kotlin development',
        'Play Store submission',
        'Material Design 3',
        'Android TV support',
        'Background services',
        'App bundles',
      ],
    },
    {
      title: 'Cross-Platform Development',
      description: 'Efficient development for both iOS and Android using modern frameworks.',
      icon: <Devices />,
      benefits: [
        'React Native',
        'Flutter development',
        'Single codebase',
        'Native performance',
        'Hot reloading',
        'Code sharing',
      ],
    },
    {
      title: 'Backend Integration',
      description: 'Seamless integration with cloud services and APIs.',
      icon: <Cloud />,
      benefits: [
        'RESTful APIs',
        'GraphQL integration',
        'Real-time updates',
        'Offline support',
        'Data synchronization',
        'Cloud storage',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered mobile design that creates engaging experiences.',
      icon: <Brush />,
      benefits: [
        'Mobile-first design',
        'Gesture interfaces',
        'Accessibility',
        'User testing',
        'Prototyping',
        'Design systems',
      ],
    },
    {
      title: 'App Maintenance',
      description: 'Continuous support and updates to keep your app running smoothly.',
      icon: <Update />,
      benefits: [
        'Bug fixes',
        'Performance optimization',
        'OS updates',
        'Security patches',
        'Analytics tracking',
        'User feedback',
      ],
    },
  ];

  const technologies = [
    { name: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit'] },
    { name: 'Android', items: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Firebase'] },
    { name: 'Cross-Platform', items: ['React Native', 'Flutter', 'Xamarin', 'Ionic', 'Cordova'] },
    { name: 'Backend', items: ['Node.js', 'Firebase', 'AWS', 'Google Cloud', 'Azure'] },
    { name: 'Testing', items: ['XCTest', 'Espresso', 'Jest', 'Detox', 'Appium'] },
    { name: 'DevOps', items: ['Fastlane', 'Bitrise', 'Jenkins', 'GitHub Actions', 'CircleCI'] },
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
                Mobile Development
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Create powerful mobile applications that engage users and drive business growth with cutting-edge technologies.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/mobile-hero.svg"
                alt="Mobile Development"
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
          Our Mobile Development Services
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
          Why Choose Our Mobile Development Services?
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
                Continuous support and maintenance to keep your app running smoothly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileDevelopment; 