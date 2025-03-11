import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import {
  WorkOutline as JobIcon,
  HealthAndSafety as HealthIcon,
  School as EducationIcon,
  AccessTime as FlexibleIcon,
  EmojiEvents as GrowthIcon,
  Groups as TeamIcon,
  CheckCircle as BenefitIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(92, 98, 249, 0.15)',
  },
}));

const Careers = () => {
  const benefits = [
    {
      icon: <HealthIcon />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and gym memberships',
    },
    {
      icon: <EducationIcon />,
      title: 'Learning & Development',
      description: 'Professional development budget and continuous learning opportunities',
    },
    {
      icon: <FlexibleIcon />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours for work-life balance',
    },
    {
      icon: <GrowthIcon />,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement',
    },
    {
      icon: <TeamIcon />,
      title: 'Great Team',
      description: 'Collaborative environment with talented professionals',
    },
  ];

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      type: 'Full-time',
      location: 'Remote / San Francisco',
      department: 'Engineering',
      experience: '5+ years',
    },
    {
      title: 'Salesforce Technical Architect',
      type: 'Full-time',
      location: 'Remote / New York',
      department: 'Salesforce Solutions',
      experience: '7+ years',
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote / Austin',
      department: 'Mobile Development',
      experience: '3+ years',
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote / Seattle',
      department: 'Infrastructure',
      experience: '4+ years',
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
            Join Our Team
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
            Build your career with us and be part of a team that's shaping the future of technology
          </Typography>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
          }}
        >
          Why Work With Us
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Join a company that values innovation, growth, and employee well-being
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {benefit.icon}
                    <Typography
                      variant="h6"
                      sx={{ ml: 1, fontWeight: 600 }}
                    >
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Current Openings */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 1,
              textAlign: 'center',
            }}
          >
            Current Openings
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Explore our open positions and find your next opportunity
          </Typography>

          <Grid container spacing={3}>
            {openings.map((job, index) => (
              <Grid item xs={12} key={index}>
                <StyledCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {job.title}
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <BenefitIcon color="primary" sx={{ fontSize: '1rem' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={`Type: ${job.type}`}
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <BenefitIcon color="primary" sx={{ fontSize: '1rem' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={`Location: ${job.location}`}
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <BenefitIcon color="primary" sx={{ fontSize: '1rem' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={`Department: ${job.department}`}
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <BenefitIcon color="primary" sx={{ fontSize: '1rem' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={`Experience: ${job.experience}`}
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                        </List>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                        }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Don't See the Right Fit?
          </Typography>
          <Typography sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Send Your Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers; 