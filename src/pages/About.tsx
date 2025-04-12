import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  styled,
  Button,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import {
  Lightbulb as VisionIcon,
  Flag as MissionIcon,
  Psychology as ValuesIcon,
  Timeline as HistoryIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
  },
}));

const StatsItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
  },
}));

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Nitesh',
      role: 'Co-founder & CEO',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Tech visionary with expertise in digital transformation and innovative solutions.',
    },
    {
      name: 'Shekhar',
      role: 'Co-founder & CTO',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Expert in cloud architecture and emerging technologies.',
    },
    {
      name: 'Shivam',
      role: 'Co-founder & COO',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Full-stack developer specializing in scalable solutions.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Design',
      image: 'https://via.placeholder.com/400x400',
      bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
    }
  ];

  const values = [
    {
      icon: <VisionIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Vision',
      description: 'To be the leading force in digital transformation, empowering businesses worldwide with innovative technology solutions.',
    },
    {
      icon: <MissionIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Mission',
      description: 'Delivering exceptional technology services that drive growth, efficiency, and success for our clients.',
    },
    {
      icon: <ValuesIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Values',
      description: 'Innovation, integrity, excellence, and client success are the cornerstones of our business philosophy.',
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'History',
      description: 'Founded in 2013, we\'ve grown from a small tech consultancy to a comprehensive digital solutions provider.',
    },
  ];

  const expertise = [
    "Digital Transformation",
    "Custom Software Development",
    "Enterprise Solutions",
    "Cloud Computing & Migration",
    "Mobile Development",
    "DevOps & CI/CD",
    "AI & Machine Learning",
    "Data Analytics"
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
                About OneTechFuse
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
                We are a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
              </Typography>
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
                }}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsItem>
              <Typography 
                variant="h3" 
                color="secondary.main" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                10+
              </Typography>
              <Typography variant="h6">Years Experience</Typography>
            </StatsItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsItem>
              <Typography 
                variant="h3" 
                color="secondary.main" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                100+
              </Typography>
              <Typography variant="h6">Clients Worldwide</Typography>
            </StatsItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsItem>
              <Typography 
                variant="h3" 
                color="secondary.main" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                250+
              </Typography>
              <Typography variant="h6">Projects Completed</Typography>
            </StatsItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsItem>
              <Typography 
                variant="h3" 
                color="secondary.main" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                30+
              </Typography>
              <Typography variant="h6">Team Members</Typography>
            </StatsItem>
          </Grid>
        </Grid>
      </Container>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.125rem',
              }}
            >
              Founded in 2013, OneTechFuse began with a simple mission: to help businesses leverage technology for growth and innovation. What started as a small team of three passionate developers has now grown into a comprehensive technology partner for businesses of all sizes.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.125rem',
              }}
            >
              We've evolved from a web development agency to a full-service technology firm, offering solutions in web and mobile development, cloud computing, artificial intelligence, and more. Our journey has been defined by continuous learning, adaptation, and a relentless focus on delivering value to our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/600x400"
              alt="Our Story"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Values
          </Typography>
          <Typography
            align="center"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.125rem',
            }}
          >
            These core principles guide every decision we make and every solution we deliver
          </Typography>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Expertise */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Our Expertise
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: '1.125rem',
                lineHeight: 1.8,
              }}
            >
              With a decade of experience in technology solutions, we've developed expertise across a wide range of domains. Our team stays at the forefront of technology trends to deliver cutting-edge solutions.
            </Typography>
            
            <Grid container spacing={2}>
              {expertise.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleIcon sx={{ color: 'secondary.main', mr: 1 }} />
                    <Typography>{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/services')}
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: 2,
                borderWidth: 2,
              }}
            >
              Explore Our Services
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/600x400"
              alt="Our Expertise"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Meet Our Team
          </Typography>
          <Typography
            align="center"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.125rem',
            }}
          >
            Our diverse team of experts brings together years of experience in technology and innovation
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: 260,
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      color="secondary.main"
                      gutterBottom
                      sx={{ 
                        fontWeight: 500,
                        mb: 2,
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
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

export default About; 