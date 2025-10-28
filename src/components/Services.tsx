import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import {
  Church,
  Settings,
  Car,
  Hotel,
  UtensilsCrossed,
  Shield
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Church: Church,
  Settings: Settings,
  Car: Car,
  Hotel: Hotel,
  Briefcase: UtensilsCrossed,
  Shield: Shield
};

const mockServices = [
  {
    id: '1',
    title: 'Devotional Tours',
    description: 'Top class quality and meaningful devotional tours for the past fifteen years. We specialize in pilgrimage tours across South and North India with experienced guides.',
    icon_name: 'Church',
    sort_order: 1
  },
  {
    id: '2',
    title: 'Customized Packages',
    description: 'Tours crafted with love, care, understanding and professionalism. Get customized tour packages designed to match your spiritual journey preferences.',
    icon_name: 'Settings',
    sort_order: 2
  },
  {
    id: '3',
    title: 'Transportation',
    description: 'A/C and Non-A/C transportation options available. Comfortable travel with professional drivers for all tour packages.',
    icon_name: 'Car',
    sort_order: 3
  },
  {
    id: '4',
    title: 'Accommodation',
    description: 'Quality accommodation arrangements at all destinations. Comfortable stays ensuring a pleasant pilgrimage experience.',
    icon_name: 'Hotel',
    sort_order: 4
  },
  {
    id: '5',
    title: 'Vegetarian Food',
    description: 'Pure vegetarian food provided throughout the tour. Hygienic and delicious meals prepared with care during your journey.',
    icon_name: 'Briefcase',
    sort_order: 5
  },
  {
    id: '6',
    title: 'Government Authorized',
    description: 'Government registered tour operator with 15 years of trusted service. Reliable and professional tour management.',
    icon_name: 'Shield',
    sort_order: 6
  }
];

const Services = () => {
  const services = mockServices;

  return (
    <Box id="services" sx={{ py: 10, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#ff6b35',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: 2
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            What We Offer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Comprehensive travel solutions tailored to make your journey comfortable, memorable, and hassle-free.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon_name] || Settings;

            return (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: '#ff6b35',
                        color: 'white'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      className="service-icon"
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        color: '#ff6b35',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.4s ease'
                      }}
                    >
                      <IconComponent size={24} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: 'text.primary',
                        fontSize: '1.05rem'
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '0.875rem'
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
