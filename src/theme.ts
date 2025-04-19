import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1929', // Dark blue-black
      light: '#1A2942',
      dark: '#050D1A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2196F3', // Material UI Blue
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#0A1929',
      secondary: '#42526E',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Poppins", "SF Pro Display", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4.5rem',
      },
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      '@media (min-width:900px)': {
        fontSize: '2rem',
      },
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (min-width:900px)': {
        fontSize: '1.75rem',
      },
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(255, 77, 77, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
          color: '#1A1A1A',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            paddingLeft: 40,
            paddingRight: 40,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        },
        elevation3: {
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
        },
        elevation4: {
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF4D4D',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF4D4D',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '&:hover': {
            backgroundColor: 'rgba(255, 77, 77, 0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '&.MuiChip-outlined': {
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export default theme; 