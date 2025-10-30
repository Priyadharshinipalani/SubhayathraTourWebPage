import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubhatathraCorporateLogo from '../assets/SubhatathraCorporateLogo.jpeg';
import SYSLogo from '../assets/SYS Logo.jpeg';
import OtieonLogo from '../assets/Otieon Logo.jpeg';

import Row from './Row';

const Hero = () => {
  const navigate = useNavigate();

  const contactBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
    p: 1.2,
    bgcolor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      transform: 'translateY(-2px)',
      bgcolor: 'rgba(255,255,255,0.25)',
      boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
    },
  };

  const iconCircleStyle = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    bgcolor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const labelText = {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.9rem',
    mb: 0.2,
  };

  const valueText = {
    fontWeight: 700,
    color: 'white',
    fontSize: '0.95rem',
  };

  // Array for Card items
  const cards = [
    {
      title: 'Package tour',
      description: 'Pack your bags, we’ll handle the rest.',
      path: '/about',
      image: SubhatathraCorporateLogo
    },
    {
      title: 'SYS - CTS',
      description: 'Your trusted partner in crypto training and trading.',
      path: '/booking',
      image: SYSLogo

    },
    {
      title: 'Otieon',
      description: 'We’re here to assist you anytime.',
      path: '/contact',
      image: OtieonLogo

    },
  ];

  const CardItem = ({ title, description,image, path }: any) => (
    <Card
      onClick={() => navigate(path)}
      sx={{
        cursor: 'pointer',
        bgcolor: 'white',
        borderRadius: 2,
        width: 200,
        height: 150,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: 80,
          height: 60,
          mt: 2,
          objectFit: 'contain',
          transition: 'transform 0.4s ease',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      />
      <CardContent sx={{ textAlign: 'center', p: 0.5, pb: 1.5 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: '#ff6b35',
            fontSize: '0.9rem',
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 0.5,
            color: 'text.secondary',
            fontSize: '0.7rem',
            opacity: 0.8,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: '80vh', md: '110vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background:
          'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #fbb040 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'url("https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920") center/cover',
          opacity: 0.2,
          zIndex: 0,
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
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 8 } }}>
        <Row gap={20}  sx={{justifyContent:"space-between", width:"100%"}}>
          {/* Left Section */}
          <Box
            sx={{
              pl:"25px",
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
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
                lineHeight: 1.1,
              }}
            >
              Subha Yathra Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.98)',
                mb: 3,
                fontWeight: 500,
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
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
                lineHeight: 1.7,
              }}
            >
              Tours crafted with love, care, understanding and professionalism. Experience meaningful pilgrimage journeys across South and North India with driver cum guide support and customized tour packages.
            </Typography>

            {/* Cards Mapped */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              {cards.map((card, index) => (
                <CardItem key={index} {...card} />
              ))}
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.15)',
              borderRadius: 3,
              p: { xs: 2, md: 3 },
              width: { xs: '40%', md: '23%' },
              mx: 'auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.11)',
              animation: 'fadeInRight 1s ease-out 0.3s backwards',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              '@keyframes fadeInRight': {
                from: { opacity: 0, transform: 'translateX(30px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
              '@keyframes breathing': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.08)' },
                '100%': { transform: 'scale(1)' },
              },
            }}
          >
            {/* ✨ Register Button (Top) */}
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                top: -25,
                background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
                color: 'white',
                fontWeight: 800,
                textTransform: 'none',
                fontSize: '1rem',
                px: 2,
                py: 1.2,
                borderRadius: '30px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                transition: 'all 0.35s ease',
                animation: 'breathing 3s ease-in-out infinite',
                '&:hover': {
                  background: 'linear-gradient(90deg, #f15a24, #ffb347)',
                  transform: 'scale(1.08)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  animation: 'none',
                },
              }}
            >
              Register Now
            </Button>

            {/* 🏷 Title */}
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                fontSize: '1.2rem',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
              }}
            >             
            </Typography>

            {/* 📞 Contact Options */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
              {/* Booking Enquiry */}
              <Box component="a" href="tel:9094949417" sx={contactBoxStyle}>
                <Box sx={iconCircleStyle}>
                  <Phone size={16} color="#ff6b35" />
                </Box>
                <Box>
                  <Typography sx={labelText}>Booking Enquiry</Typography>
                  <Typography sx={valueText}>90 94 94 94 17</Typography>
                </Box>
              </Box>

              {/* General Queries */}
              <Box component="a" href="tel:9884134858" sx={contactBoxStyle}>
                <Box sx={iconCircleStyle}>
                  <Phone size={16} color="#f7931e" />
                </Box>
                <Box>
                  <Typography sx={labelText}>General Queries</Typography>
                  <Typography sx={valueText}>98 84 13 48 58</Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box component="a" href="mailto:info@subhayathratour.com" sx={contactBoxStyle}>
                <Box sx={iconCircleStyle}>
                  <Mail size={16} color="#fbb040" />
                </Box>
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography sx={labelText}>Email Us</Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      fontSize: '0.9rem',
                      wordBreak: 'break-word',
                    }}
                  >
                    info@subhayathratour.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

        </Row>
      </Container>
    </Box>
  );
};

export default Hero;
