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
  Divider,
  Chip,
} from '@mui/material';
import {
  WorkOutline as JobIcon,
  HealthAndSafety as HealthIcon,
  School as EducationIcon,
  AccessTime as FlexibleIcon,
  EmojiEvents as GrowthIcon,
  Groups as TeamIcon,
  CheckCircle as BenefitIcon,
  LocationOn as LocationIcon,
  Business as DepartmentIcon,
  Timer as ExperienceIcon,
  MoreTime as TimeIcon,
} from '@mui/icons-material';

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

const JobCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  border: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.secondary.main,
  },
}));

const Careers = () => {
  const benefits = [
    {
      icon: <HealthIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and gym memberships',
    },
    {
      icon: <EducationIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Learning & Development',
      description: 'Professional development budget and continuous learning opportunities',
    },
    {
      icon: <FlexibleIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours for work-life balance',
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement',
    },
    {
      icon: <TeamIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
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
      description: 'We are looking for a Senior Full Stack Developer who is passionate about building innovative web applications. You will be responsible for developing and maintaining high-quality software solutions.',
    },
    {
      title: 'Salesforce Technical Architect',
      type: 'Full-time',
      location: 'Remote / New York',
      department: 'Salesforce Solutions',
      experience: '7+ years',
      description: 'As a Salesforce Technical Architect, you will design and implement complex Salesforce solutions, provide technical leadership, and ensure best practices are followed.',
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote / Austin',
      department: 'Mobile Development',
      experience: '3+ years',
      description: 'Join our team as a Mobile App Developer to build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote / Seattle',
      department: 'Infrastructure',
      experience: '4+ years',
      description: 'We are seeking a talented DevOps Engineer to help us build and maintain our cloud infrastructure, CI/CD pipelines, and automated deployment processes.',
    },
  ];

  const values = [
    "Innovation and creativity in everything we do",
    "Continuous learning and professional growth",
    "Open communication and transparency",
    "Work-life balance and personal well-being",
    "Diversity, equity, and inclusion in our workplace"
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
                Join Our Team
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
                Build your career with us and be part of a team that's shaping the future of technology
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#openings"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                View Current Openings
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Culture Section */}
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
              Our Culture
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1.125rem',
              }}
            >
              At OneTechFuse, we're building more than just software – we're creating a place where talented people can thrive. Our culture is built on collaboration, innovation, and respect, providing an environment where everyone has the opportunity to grow and make an impact.
            </Typography>
            
            <List>
              {values.map((value, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon>
                    <BenefitIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={value}
                    primaryTypographyProps={{ fontSize: '1.125rem' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/600x400"
              alt="Team Culture"
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

      {/* Benefits Section */}
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
            Why Work With Us
          </Typography>
          <Typography
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            Join a company that values innovation, growth, and employee well-being
          </Typography>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Current Openings */}
      <Box sx={{ py: 10 }} id="openings">
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
            Current Openings
          </Typography>
          <Typography
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            Explore our open positions and find your next opportunity
          </Typography>

          <Grid container spacing={4}>
            {openings.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <JobCard>
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {job.title}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Chip 
                        label={job.type} 
                        color="secondary" 
                        size="small" 
                        icon={<TimeIcon />}
                        sx={{ mr: 1, mb: 1 }} 
                      />
                      <Chip 
                        label={job.department} 
                        variant="outlined" 
                        size="small" 
                        icon={<DepartmentIcon />}
                        sx={{ mr: 1, mb: 1 }} 
                      />
                      <Chip 
                        label={job.experience} 
                        variant="outlined" 
                        size="small"
                        icon={<ExperienceIcon />}
                        sx={{ mb: 1 }} 
                      />
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 3, fontSize: '1rem', lineHeight: 1.6 }}
                    >
                      {job.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <LocationIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '1.25rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    
                    <Button 
                      variant="contained" 
                      color="secondary"
                      fullWidth
                      sx={{ 
                        borderRadius: 2,
                        py: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </JobCard>
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
            Don't See a Position That Fits?
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
            We're always looking for talented individuals to join our team. Send us your resume and let's start a conversation.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="mailto:careers@onetechfuse.com"
            sx={{
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.125rem' },
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(255, 77, 77, 0.3)',
            }}
          >
            Contact Our Recruiting Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers; 