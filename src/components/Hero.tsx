import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #fbb040 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920") center/cover',
          opacity: 0.2,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          height: '100px',
          background: 'white',
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            animation: 'fadeInUp 1s ease-out',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(30px)'
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: 'white',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              textShadow: '3px 3px 12px rgba(0,0,0,0.3)',
              lineHeight: 1.1
            }}
          >
            Subhayathra Tour and Travels
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.98)',
              mb: 3,
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.4
            }}
          >
            Enriching Devotional Tours for 15 Years
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.15rem' },
              maxWidth: 650,
              textShadow: '1px 1px 6px rgba(0,0,0,0.2)',
              lineHeight: 1.7
            }}
          >
            Tours crafted with love, care, understanding and professionalism. Experience meaningful pilgrimage journeys across South and North India with driver cum guide support and customized tour packages.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/packages')}
              sx={{
                bgcolor: 'white',
                color: '#ff6b35',
                px: { xs: 3, md: 5 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 700,
                borderRadius: 50,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'white',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              View Tour Packages
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                color: 'white',
                borderColor: 'white',
                px: { xs: 3, md: 5 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 700,
                borderRadius: 50,
                borderWidth: 2,
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  borderWidth: 2,
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Contact Us
            </Button>
            <Box
              sx={{
                bgcolor: 'transparent',
                borderRadius: 4,
                p: { xs: 3, md: 3 },
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                ml: { xs: 0, md: 3 },
                animation: 'fadeInRight 1s ease-out 0.3s backwards',
                '@keyframes fadeInRight': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(30px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0)'
                  }
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: 'white', textAlign: 'center', textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
                Book Your Tour Now
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                      transform: 'scale(1.03)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} color="#ff6b35" />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', mb: 0.3 }}>
                      Booking Enquiry
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>
                      90 94 94 94 17
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                      transform: 'scale(1.03)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} color="#f7931e" />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', mb: 0.3 }}>
                      General Queries
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>
                      98 84 13 48 58
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                      transform: 'scale(1.03)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={22} color="#fbb040" />
                  </Box>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', mb: 0.3 }}>
                      Email Us
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                        fontSize: '0.85rem',
                        wordBreak: 'break-word'
                      }}
                    >
                      info@subhayathratour.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
