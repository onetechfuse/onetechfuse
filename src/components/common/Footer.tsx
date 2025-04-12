import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  useTheme,
  Button,
  Divider,
  TextField,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Pinterest,
  Send as SendIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const theme = useTheme();

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Salesforce Solutions', path: '/services/salesforce-solutions' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'E-Commerce Solutions', path: '/services/ecommerce-solutions' },
    { name: 'Database Solutions', path: '/services/database-solutions' },
    { name: 'API Development', path: '/services/api-development' },
  ];

  const industries = [
    { name: 'Financial Services', path: '/industries/financial-services' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Retail', path: '/industries/retail' },
    { name: 'Education', path: '/industries/education' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Business Services', path: '/industries/business-services' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialMedia = [
    { icon: <LinkedIn />, link: 'https://www.linkedin.com/company/one-tech-fuse/' },
    { icon: <Facebook />, link: 'https://facebook.com' },
    { icon: <Twitter />, link: 'https://twitter.com' },
    { icon: <Instagram />, link: 'https://instagram.com' },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#1A1A1A',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
              <Logo sx={{ fontSize: 42, color: 'white' }} />
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                <span style={{ color: theme.palette.secondary.main }}>One</span>
                Tech
                <span style={{ color: theme.palette.secondary.main }}>Fuse</span>
              </Typography>
            </Stack>
            <Typography sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem' }}>
              Transforming businesses through innovative technology solutions. We bring sustainable growth and excellence to your digital journey.
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Stay Updated
            </Typography>
            <Box sx={{ display: 'flex', mb: 4 }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ ml: 1, minWidth: 'auto', px: 2 }}
              >
                <SendIcon />
              </Button>
            </Box>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialMedia.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: 'white',
                      bgcolor: theme.palette.secondary.main,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Services Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Services
            </Typography>
            <Stack spacing={2}>
              {services.map((service) => (
                <Link
                  key={service.name}
                  component={RouterLink}
                  to={service.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Industries Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Industries
            </Typography>
            <Stack spacing={2}>
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  component={RouterLink}
                  to={industry.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {industry.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Company
            </Typography>
            <Stack spacing={2}>
              {company.map((item) => (
                <Link
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Contact
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                  Noida Office
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                  123 Tech Street,<br />
                  Sector 117, Noida, 201304 
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                  Phone
                </Typography>
                <Link
                  href="tel:+919627056789"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  +91 9627056789
                </Link>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'white', mb: 1 }}>
                  Email
                </Typography>
                <Link
                  href="mailto:onetechfuse@gmail.com"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  onetechfuse@gmail.com
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ mt: 8, mb: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} OneTechFuse. All rights reserved.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms-of-service"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={RouterLink}
              to="/sitemap"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              Sitemap
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 