import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Award, Shield, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '10,000+', label: 'Happy Customers' },
  { icon: Shield, value: '100%', label: 'Safe Travel' },
  { icon: Clock, value: '24/7', label: 'Customer Support' }
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
              }}
            >
              <img
                src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 0 }}>
                  15+
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Years of Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: 2
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Your Trusted Travel Partner
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.05rem'
              }}
            >
              For over 15 years, Subha Yathra Services has been dedicated to creating meaningful and enriching travel experiences. We specialize in devotional tours, pilgrimage packages, and customized travel solutions across India.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1.05rem'
              }}
            >
              Our mission is to provide top-quality travel services with love, care, and professionalism. From sacred pilgrimages to leisure tours, we ensure every journey is comfortable, safe, and memorable.
            </Typography>

            <Grid container spacing={3}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Grid item xs={6} sm={3} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        bgcolor: 'primary.light',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 1.5
                        }}
                      >
                        <IconComponent size={32} style={{ color: '#1976d2' }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          mb: 0.5
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
