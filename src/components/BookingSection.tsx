import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #fff8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(251,176,64,0.1) 100%)',
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(247,147,30,0.08) 0%, rgba(255,107,53,0.08) 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0px)'
                  },
                  '50%': {
                    transform: 'translateY(-20px)'
                  }
                }
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Book your tour"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 20px 60px rgba(255,107,53,0.25)',
                  border: '8px solid white'
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: 'fadeInRight 1s ease-out',
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
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: '#ff6b35',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.2
                }}
              >
                Plan Your Sacred Journey
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8
                }}
              >
                Let us help you create unforgettable spiritual experiences. Our expert team is ready to customize your perfect pilgrimage tour with personalized itineraries, comfortable accommodations, and dedicated support throughout your journey.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(255,107,53,0.2)',
                        borderColor: '#ff6b35'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#fff3e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Calendar size={24} color="#ff6b35" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35', mb: 0.5, fontSize: '1.1rem' }}>
                        Flexible Dates
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        Choose dates that work best for your schedule
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(247,147,30,0.2)',
                        borderColor: '#f7931e'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#fff3e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={24} color="#f7931e" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#f7931e', mb: 0.5, fontSize: '1.1rem' }}>
                        Custom Routes
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        Tailored itineraries to match your preferences
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(251,176,64,0.2)',
                        borderColor: '#fbb040'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#fff3e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Phone size={24} color="#fbb040" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#fbb040', mb: 0.5, fontSize: '1.1rem' }}>
                        24/7 Support
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        We're here to help at every step
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(255,107,53,0.2)',
                        borderColor: '#ff6b35'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#fff3e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={24} color="#ff6b35" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35', mb: 0.5, fontSize: '1.1rem' }}>
                        Easy Booking
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        Simple and hassle-free reservation process
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    bgcolor: '#ff6b35',
                    color: 'white',
                    px: { xs: 4, md: 6 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    fontWeight: 700,
                    borderRadius: 50,
                    boxShadow: '0 8px 24px rgba(255,107,53,0.3)',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#e55a28',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 32px rgba(255,107,53,0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Book Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/packages')}
                  sx={{
                    color: '#ff6b35',
                    borderColor: '#ff6b35',
                    px: { xs: 4, md: 6 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    fontWeight: 700,
                    borderRadius: 50,
                    borderWidth: 2,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#ff6b35',
                      bgcolor: 'rgba(255,107,53,0.08)',
                      borderWidth: 2,
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  View Packages
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookingSection;
