import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Star, Quote } from 'lucide-react';

const mockTestimonials = [
  {
    id: '1',
    customer_name: 'Ramesh Kumar',
    location: 'Chennai',
    rating: 5,
    review_text: 'Excellent service! The Tirupati darshan was very well organized. The driver was punctual and courteous. Had a wonderful spiritual experience with Subhayathra Tours.',
    tour_package: 'Tirupati Balaji Darshan'
  },
  {
    id: '2',
    customer_name: 'Lakshmi Devi',
    location: 'Bangalore',
    rating: 5,
    review_text: 'Amazing devotional tour to Ahobilam. Everything was perfectly planned and the guide was very knowledgeable about the temple history. Highly recommended!',
    tour_package: 'Chennai to Ahobilam'
  },
  {
    id: '3',
    customer_name: 'Venkatesh Iyer',
    location: 'Coimbatore',
    rating: 5,
    review_text: 'Very professional and caring service. The Mantralayam tour was spiritually fulfilling. Food and accommodation were excellent. Will book again!',
    tour_package: 'Mantralayam-Bikshalaya-Panchamukhi'
  },
  {
    id: '4',
    customer_name: 'Srinivas Rao',
    location: 'Hyderabad',
    rating: 4,
    review_text: 'Good service and value for money. The Srisailam pilgrimage was memorable. Only minor delay in pickup, but overall great experience with the team.',
    tour_package: 'Srisailam Mahanandhi Temple'
  }
];

const Testimonials = () => {
  const testimonials = mockTestimonials;

  return (
    <Box id="testimonials" sx={{ py: 10, bgcolor: '#f8f9fa' }}>
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
            TESTIMONIALS
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
            What Our Clients Say
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
            Real experiences from real travelers who chose Subhayathra for their spiritual journeys.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={3} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#ff6b35',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(255,107,53,0.3)'
                  }}
                >
                  <Quote size={20} color="white" />
                </Box>

                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        bgcolor: 'primary.light',
                        color: '#ff6b35',
                        fontWeight: 700
                      }}
                    >
                      {testimonial.customer_name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.95rem'
                        }}
                      >
                        {testimonial.customer_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.85rem'
                        }}
                      >
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 0.3, mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < testimonial.rating ? '#ffc107' : 'none'}
                        stroke={i < testimonial.rating ? '#ffc107' : '#ddd'}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '0.875rem',
                      mb: 2,
                      flexGrow: 1
                    }}
                  >
                    {testimonial.review_text}
                  </Typography>

                  {testimonial.tour_package && (
                    <Box
                      sx={{
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid rgba(0,0,0,0.08)'
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#ff6b35',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      >
                        Tour: {testimonial.tour_package}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
