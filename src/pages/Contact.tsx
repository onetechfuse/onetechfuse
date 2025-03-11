import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result.text);
      setSnackbar({
        open: true,
        message: 'Thank you for your message. We will get back to you soon!',
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const services = [
    'Web Development',
    'Salesforce Solutions',
    'Mobile Development',
    'E-Commerce Solutions',
    'Database Solutions',
    'API Development',
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+91 (999) 999-9999',
      link: 'tel:+919999999999',
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'niteshsaini02@gmail.com',
      link: 'mailto:niteshsaini02@gmail.com',
    },
    {
      icon: <LocationIcon />,
      title: 'Location',
      content: 'Bangalore, India',
      link: 'https://maps.google.com',
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
              textAlign: 'center',
            }}
          >
            Get in Touch
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              maxWidth: '800px',
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.5,
              textAlign: 'center',
              mx: 'auto',
            }}
          >
            Let's discuss how we can help transform your business through innovative technology solutions
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography 
                variant="h4" 
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Contact Information
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Reach out to us through any of these channels or fill out the form.
                We're here to help!
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(92, 98, 249, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mr: 2,
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'secondary.light',
                        color: 'white',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        component="a"
                        href={info.link}
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          '&:hover': {
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography 
                variant="h4" 
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Send us a Message
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>

              <form ref={formRef} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Service Interested In"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {services.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      disabled={loading}
                      sx={{
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 600,
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 