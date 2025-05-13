import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  CheckCircle,
  Psychology,
  SmartToy,
  Speed,
  Support,
  AutoAwesome,
  Cloud,
  Chat,
  DataObject,
  Analytics,
  Security,
  Autorenew,
} from '@mui/icons-material';

const AiAgents: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/contact');
  };

  const features = [
    {
      title: 'Task Automation',
      description: 'Streamline your business processes with intelligent AI agents.',
      icon: <Autorenew />,
      benefits: [
        'Workflow automation',
        'Document processing',
        'Data entry automation',
        'Email management',
        'Scheduling assistance',
        'Process optimization',
      ],
    },
    {
      title: 'Intelligent Workflows',
      description: 'Create smart workflows that adapt and learn from your business processes.',
      icon: <SmartToy />,
      benefits: [
        'Adaptive learning',
        'Process optimization',
        'Decision automation',
        'Intelligent routing',
        'Performance analytics',
        'Custom workflows',
      ],
    },
    {
      title: 'Natural Language Processing',
      description: 'Leverage advanced NLP capabilities for text and speech understanding.',
      icon: <Chat />,
      benefits: [
        'Text analysis',
        'Sentiment analysis',
        'Language translation',
        'Content generation',
        'Chatbot development',
        'Voice recognition',
      ],
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed for your specific business needs.',
      icon: <Psychology />,
      benefits: [
        'Custom model development',
        'AI integration',
        'Model training',
        'Performance optimization',
        'Scalability solutions',
        'Continuous learning',
      ],
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      icon: <Analytics />,
      benefits: [
        'Predictive analytics',
        'Pattern recognition',
        'Trend analysis',
        'Real-time monitoring',
        'Custom dashboards',
        'Data visualization',
      ],
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems.',
      icon: <DataObject />,
      benefits: [
        'API integration',
        'System compatibility',
        'Cloud deployment',
        'Security implementation',
        'Performance monitoring',
        'Scalable architecture',
      ],
    },
  ];

  const technologies = [
    { name: 'AI Frameworks', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenAI API'] },
    { name: 'Cloud AI', items: ['AWS SageMaker', 'Google AI', 'Azure AI', 'IBM Watson', 'Vertex AI'] },
    { name: 'NLP Tools', items: ['NLTK', 'spaCy', 'Transformers', 'GPT-3', 'BERT'] },
    { name: 'ML Ops', items: ['MLflow', 'Kubeflow', 'DVC', 'Weight & Biases', 'Neptune'] },
    { name: 'Data Processing', items: ['Pandas', 'NumPy', 'Apache Spark', 'Dask', 'Ray'] },
    { name: 'Deployment', items: ['Docker', 'Kubernetes', 'FastAPI', 'TensorFlow Serving', 'BentoML'] },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/pattern.svg")',
            opacity: 0.1,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #fff 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI Agents
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Transform your business operations with intelligent AI agents that automate tasks, streamline workflows, and enhance productivity.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
          }}
        >
          Our AI Agent Services
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                onClick={handleCardClick}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: 'white',
                        mr: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <List dense>
                    {feature.benefits.map((benefit, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technologies Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Technologies We Use
          </Typography>
          <Grid container spacing={4}>
            {technologies.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {category.name}
                    </Typography>
                    <List dense>
                      {category.items.map((item, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle color="secondary" sx={{ fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AiAgents; 