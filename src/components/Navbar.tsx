import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tourPackageAnchor, setTourPackageAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Tour Packages', path: '/packages', hasDropdown: true },
    { label: 'Career', path: '/career' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const tourPackageItems = [
    'Tamilnadu Temple & Tour Package',
    'Kerala Temple & Tour Package',
    'Tirupati Temple & Tour Package'
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    handleTourPackageClose();
  };

  const handleTourPackageClick = (event: React.MouseEvent<HTMLElement>) => {
    setTourPackageAnchor(event.currentTarget);
  };

  const handleTourPackageClose = () => {
    setTourPackageAnchor(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, px: 2 }}>
        <img
          src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=200"
          alt="Subhayathra Tours"
          style={{ height: '50px', objectFit: 'contain', cursor: 'pointer' }}
          onClick={() => handleNavClick('/')}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavClick(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Subhayathra Tours & Travels"
                style={{
                  height: '55px',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0 }}>
              {navItems.map((item) => (
                <Box key={item.label}>
                  <Button
                    onClick={item.hasDropdown ? handleTourPackageClick : () => handleNavClick(item.path)}
                    sx={{
                      px: 2,
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      position: 'relative',
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#ff6b35',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: '2px',
                        bgcolor: '#ff6b35',
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '80%'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.hasDropdown && (
                    <Menu
                      anchorEl={tourPackageAnchor}
                      open={Boolean(tourPackageAnchor)}
                      onClose={handleTourPackageClose}
                      sx={{
                        '& .MuiPaper-root': {
                          mt: 1,
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          borderRadius: 2
                        }
                      }}
                    >
                      {tourPackageItems.map((packageItem) => (
                        <MenuItem
                          key={packageItem}
                          onClick={() => handleNavClick('/packages')}
                          sx={{
                            py: 1.5,
                            px: 3,
                            '&:hover': {
                              bgcolor: '#fff3e0',
                              color: '#ff6b35'
                            }
                          }}
                        >
                          {packageItem}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: '#4caf50',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#45a049',
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="tel:9094949417"
                >
                  <Phone size={20} />
                </IconButton>

                <IconButton
                  sx={{
                    bgcolor: '#ff6b35',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#e65100',
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <User size={20} />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: '#ff6b35',
                  color: 'white',
                  ml: 2,
                  px: 3,
                  py: 0.9,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(255,107,53,0.3)',
                  '&:hover': {
                    bgcolor: '#e65100',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 16px rgba(255,107,53,0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Register
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
