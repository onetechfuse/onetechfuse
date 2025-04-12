import React, { useState, useRef } from 'react';
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
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  KeyboardArrowDown as ArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Logo from './Logo';

interface ServiceItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

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

  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 320,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button component={RouterLink} to="/" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        
        {/* Mobile Services Menu */}
        <ListItem button onClick={() => setServicesOpen(!servicesOpen)}>
          <ListItemText primary="Services" />
          <ArrowDownIcon sx={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }}/>
        </ListItem>
        {servicesOpen && (
          <Box sx={{ pl: 2 }}>
            {services.map((service) => (
              <ListItem 
                button 
                key={service.name} 
                component={RouterLink} 
                to={service.path} 
                onClick={() => setMobileMenuOpen(false)}
                sx={{ py: 1 }}
              >
                <ListItemText primary={service.name} />
              </ListItem>
            ))}
          </Box>
        )}
        
        {/* Mobile Industries Menu */}
        <ListItem button onClick={() => setIndustriesOpen(!industriesOpen)}>
          <ListItemText primary="Industries" />
          <ArrowDownIcon sx={{ transform: industriesOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }}/>
        </ListItem>
        {industriesOpen && (
          <Box sx={{ pl: 2 }}>
            {industries.map((industry) => (
              <ListItem 
                button 
                key={industry.name} 
                component={RouterLink} 
                to={industry.path} 
                onClick={() => setMobileMenuOpen(false)}
                sx={{ py: 1 }}
              >
                <ListItemText primary={industry.name} />
              </ListItem>
            ))}
          </Box>
        )}
        
        <ListItem button component={RouterLink} to="/about" onClick={() => setMobileMenuOpen(false)}>
          <ListItemText primary="About Us" />
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

  interface NavMenuProps {
    items: ServiceItem[];
    menuRef: React.RefObject<HTMLDivElement>;
    open: boolean;
    label: string;
    path: string;
  }

  const NavMenu = ({ items, menuRef, open, label, path }: NavMenuProps) => {
    // Calculate the number of columns needed (3 items per column)
    const columnsNeeded = Math.ceil(items.length / 3);
    
    return (
      <Box
        ref={menuRef}
        onMouseEnter={() => menuRef === servicesRef ? setServicesOpen(true) : setIndustriesOpen(true)}
        onMouseLeave={() => menuRef === servicesRef ? setServicesOpen(false) : setIndustriesOpen(false)}
        sx={{ position: 'relative', display: 'inline-block' }}
      >
        <Button
          color="inherit"
          component={RouterLink}
          to={path}
          endIcon={<ArrowDownIcon />}
          sx={{
            textDecoration: 'none',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            height: '64px',
            '&:hover': {
              color: theme.palette.secondary.main,
              backgroundColor: 'transparent',
            },
          }}
        >
          {label}
        </Button>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '64px',
            zIndex: 1200,
            width: columnsNeeded > 1 ? columnsNeeded * 220 : 220,
            visibility: open ? 'visible' : 'hidden',
            opacity: open ? 1 : 0,
            transition: 'opacity 0.2s ease, visibility 0.2s ease',
          }}
        >
          <Paper 
            elevation={3}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              mt: 0.5,
              display: 'flex',
            }}
          >
            {Array.from({ length: columnsNeeded }).map((_, columnIndex) => (
              <MenuList key={columnIndex} sx={{ width: '220px', padding: 0 }}>
                {items
                  .slice(columnIndex * 3, (columnIndex + 1) * 3)
                  .map((item) => (
                    <MenuItem
                      key={item.name}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        py: 1.5,
                        px: 3,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 77, 77, 0.05)',
                          color: theme.palette.secondary.main,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 500,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </MenuItem>
                  ))}
              </MenuList>
            ))}
          </Paper>
        </Box>
      </Box>
    );
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={2} 
            sx={{ 
              flexGrow: 1,
              '&:hover': {
                '& .logo': {
                  transform: 'scale(1.05)',
                },
                '& .company-name': {
                  color: theme.palette.secondary.main,
                },
              },
              textDecoration: 'none',
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
                fontWeight: 800,
                letterSpacing: '-0.02em',
                transition: 'color 0.3s ease-in-out',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
              className="company-name"
            >
              <span style={{ color: theme.palette.secondary.main }}>One</span>
              <span style={{ letterSpacing: '-0.04em', margin: '0 1px' }}>Tech</span>
              <span style={{ color: theme.palette.secondary.main }}>Fuse</span>
            </Typography>
          </Stack>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <NavMenu 
                items={services} 
                menuRef={servicesRef} 
                open={servicesOpen} 
                label="Services" 
                path="/services" 
              />
              
              <NavMenu 
                items={industries} 
                menuRef={industriesRef} 
                open={industriesOpen} 
                label="Industries" 
                path="/industries" 
              />
              
              <Button
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  height: '64px',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                About Us
              </Button>
              <Button
                component={RouterLink}
                to="/careers"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  height: '64px',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Careers
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                color="inherit"
                variant="outlined"
                sx={{ 
                  textDecoration: 'none',
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: 12,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderColor: 'currentColor',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 14px rgba(255, 77, 77, 0.2)',
                    backgroundColor: 'transparent',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <MobileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 