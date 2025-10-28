import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockPackages = [
  {
    id: '1',
    title: 'Tirupati Balaji Darshan',
    description: 'One day pilgrimage to the sacred Tirumala Venkateswara Temple. Experience divine blessings with our well-organized darshan arrangements and comfortable travel.',
    destination: 'Tirupati, Andhra Pradesh',
    duration: '1 Day',
    price: 3750,
    image_url: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    inclusions: ['Transportation', 'Driver cum Guide', 'Special Darshan', 'Vegetarian Meals'],
    highlights: ['Visit to Tirumala Temple', 'Special Darshan Arrangements', 'Comfortable Travel', 'Professional Guide']
  },
  {
    id: '2',
    title: 'Chennai to Ahobilam',
    description: 'Two day devotional tour to the sacred Ahobilam Nava Narasimha temples. Experience the divine presence of Lord Narasimha in all nine forms.',
    destination: 'Ahobilam, Andhra Pradesh',
    duration: '2 Days',
    price: 7500,
    image_url: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    inclusions: ['AC Transportation', 'Accommodation', 'All Meals', 'Guide Service'],
    highlights: ['Nava Narasimha Temples', 'Upper and Lower Ahobilam', 'Devotional Experience', 'Comfortable Stay']
  },
  {
    id: '3',
    title: 'Mantralayam-Bikshalaya-Panchamukhi',
    description: 'Visit the holy Mantralayam temple and other sacred sites. Experience the divine grace of Sri Raghavendra Swamy.',
    destination: 'Mantralayam, Karnataka',
    duration: '2 Days',
    price: 8500,
    image_url: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: true,
    inclusions: ['AC Transportation', 'Hotel Stay', 'Vegetarian Food', 'Darshan Tickets'],
    highlights: ['Mantralayam Temple', 'Panchamukhi Temple', 'Bikshalaya Darshan', 'Sacred Sites Visit']
  },
  {
    id: '4',
    title: 'Srisailam Mahanandhi Temple',
    description: 'Pilgrimage to the Jyotirlinga temple of Lord Mallikarjuna at Srisailam and the ancient Mahanandi temple.',
    destination: 'Srisailam, Andhra Pradesh',
    duration: '2 Days',
    price: 9000,
    image_url: 'https://images.pexels.com/photos/2976549/pexels-photo-2976549.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: false,
    inclusions: ['AC Transportation', 'Accommodation', 'All Meals', 'Temple Visits'],
    highlights: ['Srisailam Jyotirlinga', 'Mahanandi Temple', 'Bhramaramba Temple', 'Scenic Beauty']
  },
  {
    id: '5',
    title: 'Coimbatore to Ahobilam',
    description: 'Three day devotional package from Coimbatore covering the sacred Ahobilam Nava Narasimha temples with comfortable stay and meals.',
    destination: 'Ahobilam, Andhra Pradesh',
    duration: '3 Days',
    price: 10500,
    image_url: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_featured: false,
    inclusions: ['AC Transportation', '2 Nights Stay', 'All Meals', 'Guide Service'],
    highlights: ['All Nine Narasimha Temples', 'Detailed Temple Tour', 'Comfortable Journey', 'Devotional Guidance']
  }
];

const Packages = () => {
  const packages = mockPackages;
  const navigate = useNavigate();

  return (
    <Box id="packages" sx={{ py: 10, bgcolor: 'white' }}>
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
            TOUR PACKAGES
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
            Popular Destinations
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
            Explore our handpicked tour packages designed to offer you the best travel experiences at great value.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {packages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                    '& .package-image': {
                      transform: 'scale(1.08)'
                    }
                  }
                }}
              >
                {pkg.is_featured && (
                  <Chip
                    label="FEATURED"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 2,
                      bgcolor: '#ff6b35',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: 0.5
                    }}
                  />
                )}
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 180 }}>
                  <CardMedia
                    component="img"
                    className="package-image"
                    image={pkg.image_url}
                    alt={pkg.title}
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      p: 2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        textShadow: '1px 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {pkg.title}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <MapPin size={16} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {pkg.destination}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <Clock size={16} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {pkg.duration}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.6,
                      fontSize: '0.875rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {pkg.description}
                  </Typography>

                  {pkg.highlights.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary', fontSize: '0.9rem' }}>
                        Highlights:
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CheckCircle2 size={12} style={{ color: '#4caf50' }} />
                            <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                              {highlight}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                          Starting from
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff6b35', fontSize: '1.3rem' }}>
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#ffc107"
                            stroke="#ffc107"
                          />
                        ))}
                      </Box>
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => navigate('/contact')}
                      sx={{
                        py: 1.2,
                        fontWeight: 600,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;
