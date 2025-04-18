import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | OneTechFuse</title>
        <meta name="description" content="The page you are looking for could not be found. Please check the URL or navigate back to our homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Box
        sx={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4rem', md: '6rem' },
                fontWeight: 800,
                color: 'primary.main',
                mb: 2,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Page Not Found
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: 2,
                mr: 2,
              }}
            >
              Go to Homepage
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate(-1)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Go Back
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound; 