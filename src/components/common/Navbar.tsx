import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  KeyboardArrowDown as ArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Logo from './Logo';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [industriesAnchorEl, setIndustriesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleMobileMenuClick = (path: string) => {
    setMobileMenuOpen(false);
    // If you're using react-router, you can add navigation here
  };

  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          width: '80%',
          maxWidth: '300px',
          bgcolor: 'background.paper',
          p: 2,
        },
      }}
    >
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button component={RouterLink} to="/" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        
        <ListItem button onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Services" />
        </ListItem>
        {services.map((service) => (
          <ListItem
            button
            key={service.path}
            component={RouterLink}
            to={service.path}
            onClick={() => setMobileMenuOpen(false)}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={service.name} />
          </ListItem>
        ))}

        <ListItem button onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Industries" />
        </ListItem>
        {industries.map((industry) => (
          <ListItem
            button
            key={industry.path}
            component={RouterLink}
            to={industry.path}
            onClick={() => setMobileMenuOpen(false)}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={industry.name} />
          </ListItem>
        ))}

        <ListItem button component={RouterLink} to="/about" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={RouterLink} to="/blog" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={RouterLink} to="/careers" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Careers" />
        </ListItem>
        <ListItem button component={RouterLink} to="/contact" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={1} 
            sx={{ 
              flexGrow: 1,
              '&:hover': {
                '& .logo': {
                  transform: 'scale(1.1)',
                },
                '& .company-name': {
                  color: theme.palette.secondary.light,
                },
              },
            }}
            component={RouterLink}
            to="/"
          >
            <Logo 
              sx={{ 
                fontSize: { xs: 36, md: 48 }, 
                color: 'inherit',
                transition: 'transform 0.3s ease-in-out',
              }}
              className="logo"
            />
            <Typography
              variant="h5"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
                letterSpacing: 1,
                transition: 'color 0.3s ease-in-out',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
              className="company-name"
            >
              <span style={{ color: theme.palette.secondary.light }}>One</span>
              Tech
              <span style={{ color: theme.palette.secondary.light }}>Fuse</span>
            </Typography>
          </Stack>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Home
              </Button>

              <Button
                color="inherit"
                sx={{ mx: 1 }}
                onClick={(e) => setServicesAnchorEl(e.currentTarget)}
                endIcon={<ArrowDownIcon />}
              >
                Services
              </Button>
              <Menu
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={() => setServicesAnchorEl(null)}
                sx={{ mt: 1 }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.path}
                    component={RouterLink}
                    to={service.path}
                    onClick={() => setServicesAnchorEl(null)}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Menu>

              <Button
                color="inherit"
                sx={{ mx: 1 }}
                onClick={(e) => setIndustriesAnchorEl(e.currentTarget)}
                endIcon={<ArrowDownIcon />}
              >
                Industries
              </Button>
              <Menu
                anchorEl={industriesAnchorEl}
                open={Boolean(industriesAnchorEl)}
                onClose={() => setIndustriesAnchorEl(null)}
                sx={{ mt: 1 }}
              >
                {industries.map((industry) => (
                  <MenuItem
                    key={industry.path}
                    component={RouterLink}
                    to={industry.path}
                    onClick={() => setIndustriesAnchorEl(null)}
                  >
                    {industry.name}
                  </MenuItem>
                ))}
              </Menu>

              <Button
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{ mx: 1 }}
              >
                About
              </Button>

              <Button
                component={RouterLink}
                to="/blog"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Blog
              </Button>

              <Button
                component={RouterLink}
                to="/careers"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Careers
              </Button>

              <Button
                component={RouterLink}
                to="/contact"
                color="inherit"
                variant="outlined"
                sx={{ 
                  ml: 2,
                  borderColor: 'currentColor',
                  '&:hover': {
                    borderColor: theme.palette.secondary.light,
                    color: theme.palette.secondary.light,
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
          <MobileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 