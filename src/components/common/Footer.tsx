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
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Pinterest,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

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
    { name: 'Information Technology', path: '/industries/information-technology' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Nonprofit', path: '/industries/nonprofit' },
    { name: 'Retail', path: '/industries/retail' },
    { name: 'Healthcare', path: '/industries/healthcare' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialMedia = [
    { icon: <Facebook />, link: 'https://facebook.com' },
    { icon: <Twitter />, link: 'https://twitter.com' },
    { icon: <LinkedIn />, link: 'https://linkedin.com' },
    { icon: <Instagram />, link: 'https://instagram.com' },
    { icon: <YouTube />, link: 'https://youtube.com' },
    { icon: <Pinterest />, link: 'https://pinterest.com' },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              OneTechFuse
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Transforming businesses through innovative technology solutions. We bring sustainable growth and excellence to your digital journey.
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
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(92, 98, 249, 0.08)',
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Services
            </Typography>
            <Stack spacing={1}>
              {services.map((service) => (
                <Link
                  key={service.name}
                  component={RouterLink}
                  to={service.path}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Industries
            </Typography>
            <Stack spacing={1}>
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  component={RouterLink}
                  to={industry.path}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              {company.map((item) => (
                <Link
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
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
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Contact
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  USA Office
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  123 Tech Street,<br />
                  San Francisco, CA 94105
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Link
                  href="tel:+1-555-123-4567"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  +1 (555) 123-4567
                </Link>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Link
                  href="mailto:contact@onetechfuse.com"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  contact@onetechfuse.com
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} OneTechFuse. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms-conditions"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Terms & Conditions
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 