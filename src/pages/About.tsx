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
} from '@mui/material';
import {
  Lightbulb as VisionIcon,
  Flag as MissionIcon,
  Psychology as ValuesIcon,
  Timeline as HistoryIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(92, 98, 249, 0.15)',
  },
}));

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Nitesh',
      role: 'Co-founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Tech visionary with expertise in digital transformation and innovative solutions.',
    },
    {
      name: 'Shekhar',
      role: 'Co-founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Expert in cloud architecture and emerging technologies.',
    },
    {
      name: 'Shivam',
      role: 'Co-founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Full-stack developer specializing in scalable solutions.',
    }
  ];

  const values = [
    {
      icon: <VisionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Vision',
      description: 'To be the leading force in digital transformation, empowering businesses worldwide with innovative technology solutions.',
    },
    {
      icon: <MissionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Mission',
      description: 'Delivering exceptional technology services that drive growth, efficiency, and success for our clients.',
    },
    {
      icon: <ValuesIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Values',
      description: 'Innovation, integrity, excellence, and client success are the cornerstones of our business philosophy.',
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'History',
      description: 'Founded in 2013, we\'ve grown from a small tech consultancy to a comprehensive digital solutions provider.',
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
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 2,
            }}
          >
            About OneTechFuse
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              maxWidth: '800px',
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.5,
            }}
          >
            We are a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
          </Typography>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 1,
              textAlign: 'center',
            }}
          >
            Meet Our Team
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mb: { xs: 4, sm: 5, md: 6 },
              maxWidth: '700px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            Our diverse team of experts brings together years of experience in technology and innovation
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    mb: { xs: 3, sm: 0 },
                  }}
                >
                  <Avatar
                    src={member.image}
                    sx={{
                      width: { xs: 100, sm: 120 },
                      height: { xs: 100, sm: 120 },
                      mx: 'auto',
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    color="primary"
                    gutterBottom
                    sx={{ 
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography 
                    color="text.secondary" 
                    sx={{ 
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      px: { xs: 2, sm: 0 },
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledPaper>
                <Box sx={{ mb: 2 }}>
                  {React.cloneElement(value.icon, {
                    sx: { 
                      fontSize: { xs: 32, sm: 36, md: 40 },
                      color: 'primary.main',
                    }
                  })}
                </Box>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  {value.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Join Our Journey
          </Typography>
          <Typography 
            sx={{ 
              mb: 4, 
              opacity: 0.9, 
              maxWidth: '600px', 
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Be part of our mission to transform the digital landscape. We're always looking for talented individuals to join our team.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/careers')}
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            View Career Opportunities
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 