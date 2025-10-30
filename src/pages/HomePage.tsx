import { Box, Container, Typography, Grid, Card, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#ff6b35',
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                letterSpacing: { xs: 1, md: 3 },
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              SUBHA YATHRA SERVICES
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#f7931e',
                fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' }
              }}
            >
              வாழ்வது ஒரு முறை வாழ்த்தட்டும் தலைமுறை
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <Box
                      sx={{
                        bgcolor: '#f5f5f5',
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#1a1a1a',
                          mb: 2,
                          borderBottom: '2px solid #ff6b35',
                          pb: 1
                        }}
                      >
                        Subha Yathra Services
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, '& li': { mb: 0.8, fontSize: '0.85rem', color: '#555', lineHeight: 1.5 } }}>
                        <li>Spiritual Tour Packages</li>
                        <li>Cultural Tour Packages</li>
                        <li>Devotional Tour Packages</li>
                        <li>Customized Tour Packages</li>
                        <li>Educational Tour Packages</li>
                        <li>We have 15+ Years of Experience in Tour & Travel</li>
                        <li>Commitment, Timeliness, Trust, Quality & Responsibility</li>
                      </Box>
                      <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                          variant="contained"
                          onClick={() => navigate('/packages')}
                          sx={{
                            bgcolor: '#ff6b35',
                            color: 'white',
                            px: 3,
                            py: 1,
                            borderRadius: 50,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                              bgcolor: '#f7931e'
                            }
                          }}
                        >
                          Register Now
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => navigate('/about')}
                          sx={{
                            bgcolor: '#1a1a1a',
                            color: 'white',
                            px: 3,
                            py: 1,
                            borderRadius: 50,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                              bgcolor: '#333'
                            }
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        bgcolor: '#2c3e50',
                        height: '100%',
                        minHeight: { xs: 200, md: 300 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    >
                      <Box
                        component="img"
                        src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Tour Services"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.6
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'stretch'
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#f5f5f5',
                    p: 4,
                    flex: { xs: '1', md: '0 0 66%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#1a1a1a',
                      mb: 2,
                      borderBottom: '2px solid #2196f3',
                      pb: 1
                    }}
                  >
                    Otison
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      lineHeight: 1.6,
                      mb: 1.5,
                      fontSize: '0.85rem'
                    }}
                  >
                    Join an expansive Otison platform that anyone will be mentor &amp; everyone else be mentee.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      lineHeight: 1.6,
                      fontSize: '0.85rem'
                    }}
                  >
                    Experience revolutionary learning where knowledge sharing creates opportunities. Connect, collaborate, and grow together in a dynamic professional network.
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/career')}
                      sx={{
                        bgcolor: '#ff6b35',
                        color: 'white',
                        px: 3,
                        py: 1,
                        borderRadius: 50,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#f7931e'
                        }
                      }}
                    >
                      Register Now
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/career')}
                      sx={{
                        bgcolor: '#1a1a1a',
                        color: 'white',
                        px: 3,
                        py: 1,
                        borderRadius: 50,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#333'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#1e3a8a',
                    flex: { xs: '0 0 200px', md: '0 0 34%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundImage: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)'
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Otison Platform"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.6
                    }}
                  />
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'stretch'
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#f5f5f5',
                    p: 4,
                    flex: { xs: '1', md: '0 0 66%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#1a1a1a',
                      mb: 2,
                      borderBottom: '2px solid #4caf50',
                      pb: 1
                    }}
                  >
                    BoosterAI
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, '& li': { mb: 0.8, fontSize: '0.8rem', color: '#555', lineHeight: 1.5 } }}>
                    <li><strong>THE SMART START:</strong> Begin in BoosterAI way! Launch your journey with intelligent guidance</li>
                    <li><strong>THE FIRST TARGET:</strong> Your first goal is crucial. Make it count with our proven strategies</li>
                    <li><strong>SIMPLE DUPLICATIONS:</strong> Join 2+ teams and multiply your success through collaboration</li>
                  </Box>
                  <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#ff6b35',
                        color: 'white',
                        px: 3,
                        py: 1,
                        borderRadius: 50,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#f7931e'
                        }
                      }}
                    >
                      Register Now
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#1a1a1a',
                        color: 'white',
                        px: 3,
                        py: 1,
                        borderRadius: 50,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#333'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#065f46',
                    flex: { xs: '0 0 200px', md: '0 0 34%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)'
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="BoosterAI"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.6
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
