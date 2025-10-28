import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const mockGalleryImages = [
  { id: '1', title: 'Tirupati Temple', url: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', title: 'Ahobilam Temple', url: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '3', title: 'Temple Architecture', url: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '4', title: 'Srisailam', url: 'https://images.pexels.com/photos/2976549/pexels-photo-2976549.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '5', title: 'Temple View', url: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '6', title: 'Pilgrimage Journey', url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '7', title: 'Sacred Temple', url: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '8', title: 'Temple Complex', url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '9', title: 'Religious Site', url: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

const GalleryPage = () => {
  return (
    <Box>
      <Box sx={{
        bgcolor: 'primary.light',
        py: 6,
        borderBottom: '3px solid',
        borderColor: 'primary.main'
      }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              color: 'primary.main',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Photo Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mt: 2,
              fontSize: '1.2rem'
            }}
          >
            Glimpses from our devotional tours
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {mockGalleryImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                    '& .gallery-image': {
                      transform: 'scale(1.1)'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
                  <CardMedia
                    component="img"
                    className="gallery-image"
                    image={image.url}
                    alt={image.title}
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
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GalleryPage;
