import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(92, 98, 249, 0.15)',
  },
}));

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      category: 'Web Development',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
    },
    {
      title: 'Maximizing Business Growth with Salesforce Solutions',
      category: 'Salesforce',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Learn how businesses are leveraging Salesforce to drive growth and improve customer relationships.',
      date: 'Mar 12, 2024',
      readTime: '4 min read',
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      category: 'Mobile Development',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'A comprehensive comparison of native and cross-platform development approaches.',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
    },
    {
      title: 'Building Secure and Scalable APIs',
      category: 'API Development',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Best practices for developing robust APIs that can handle growth and maintain security.',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
    },
    {
      title: 'E-commerce Optimization Strategies',
      category: 'E-Commerce',
      image: 'https://via.placeholder.com/600x400',
      excerpt: "Proven techniques to enhance your e-commerce platform's performance and user experience.",
      date: 'Mar 5, 2024',
      readTime: '5 min read',
    },
    {
      title: 'Database Management Best Practices',
      category: 'Database',
      image: 'https://via.placeholder.com/600x400',
      excerpt: 'Essential tips for maintaining efficient and reliable database systems.',
      date: 'Mar 3, 2024',
      readTime: '4 min read',
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Salesforce',
    'Mobile Development',
    'API Development',
    'E-Commerce',
    'Database',
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
            Tech Insights & Updates
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
            Stay informed about the latest technology trends, best practices, and industry insights
          </Typography>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            mb: 6,
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => {}}
              sx={{
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Blog Posts Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard onClick={() => navigate(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{ mb: 2 }}
                    color="primary"
                  />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            }}
          >
            Load More Articles
          </Button>
        </Box>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Stay Updated
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Blog; 