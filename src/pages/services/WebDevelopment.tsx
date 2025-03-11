import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link as RouterLink } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Web Development Services
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Custom Web Solutions for Your Business
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Overview Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Transform Your Online Presence
            </Typography>
            <Typography paragraph>
              We create stunning, responsive websites that engage your audience and drive results.
              Our web development team combines creative design with technical expertise to deliver
              websites that not only look great but also perform exceptionally.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ mt: 2 }}
            >
              Start Your Project
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Our Web Development Process
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Requirements Analysis"
                    secondary="Understanding your business needs and goals"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Design & Prototyping"
                    secondary="Creating wireframes and interactive prototypes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Development"
                    secondary="Building with modern technologies and best practices"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Testing & Deployment"
                    secondary="Ensuring quality and smooth launch"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Services Details */}
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Our Web Development Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2, height: '100%' }}>
              <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Frontend Development
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• React.js Applications" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Angular Development" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Vue.js Solutions" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Responsive Design" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2, height: '100%' }}>
              <SpeedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Backend Development
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• Node.js/Express" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Python/Django" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Database Design" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• API Development" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2, height: '100%' }}>
              <DevicesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Additional Services
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• CMS Integration" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Performance Optimization" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• SEO Implementation" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Security Measures" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Technologies */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Technologies We Use
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Frontend
              </Typography>
              <Typography>
                • React.js<br />
                • Angular<br />
                • Vue.js<br />
                • Next.js<br />
                • TypeScript
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Backend
              </Typography>
              <Typography>
                • Node.js<br />
                • Express<br />
                • Django<br />
                • Laravel<br />
                • Spring Boot
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Database
              </Typography>
              <Typography>
                • MongoDB<br />
                • PostgreSQL<br />
                • MySQL<br />
                • Redis<br />
                • Firebase
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Tools
              </Typography>
              <Typography>
                • Git<br />
                • Docker<br />
                • Jenkins<br />
                • Webpack<br />
                • AWS/Azure
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Web Project?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }} color="text.secondary">
            Let's discuss how we can help you achieve your goals
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WebDevelopment; 