import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { Calendar, User, ArrowRight } from 'lucide-react';

const mockBlogPosts = [
  {
    id: '1',
    title: 'Top 10 Temples to Visit in South India',
    excerpt: 'Explore the most sacred and architecturally stunning temples in South India. From Tirupati to Madurai, discover the spiritual heart of the region.',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'March 15, 2024',
    category: 'Travel Guide'
  },
  {
    id: '2',
    title: 'Essential Tips for First-Time Pilgrims',
    excerpt: 'Planning your first spiritual journey? Here are essential tips for a comfortable and meaningful pilgrimage experience.',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'March 10, 2024',
    category: 'Travel Tips'
  },
  {
    id: '3',
    title: 'The History of Ahobilam Nava Narasimha Temples',
    excerpt: 'Discover the rich history and spiritual significance of the nine Narasimha temples at Ahobilam.',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'March 5, 2024',
    category: 'Temple History'
  },
  {
    id: '4',
    title: 'Best Time to Visit Tirupati Temple',
    excerpt: 'Learn about the best seasons, festivals, and times to visit the famous Tirupati Balaji temple for a peaceful darshan.',
    image: 'https://images.pexels.com/photos/2976549/pexels-photo-2976549.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'February 28, 2024',
    category: 'Travel Guide'
  },
  {
    id: '5',
    title: 'Vegetarian Food Guide for Pilgrims',
    excerpt: 'Explore the delicious vegetarian cuisine available during your spiritual journey across South India.',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'February 20, 2024',
    category: 'Food & Culture'
  },
  {
    id: '6',
    title: 'Sacred Mantras and Temple Rituals',
    excerpt: 'Understanding the significance of mantras and rituals performed at various temples during your pilgrimage.',
    image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Subhayathra Team',
    date: 'February 15, 2024',
    category: 'Spiritual'
  }
];

const BlogPage = () => {
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
            Travel Blog
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
            Stories, tips, and guides for spiritual travelers
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockBlogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                    '& .blog-image': {
                      transform: 'scale(1.08)'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                  <CardMedia
                    component="img"
                    className="blog-image"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: '#ff6b35',
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                      flexGrow: 1
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <User size={16} />
                      <Typography variant="caption">{post.author}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <Calendar size={16} />
                      <Typography variant="caption">{post.date}</Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="text"
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      alignSelf: 'flex-start',
                      fontWeight: 600,
                      color: 'primary.main',
                      p: 0,
                      '&:hover': {
                        bgcolor: 'transparent',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)'
                        }
                      },
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.3s ease'
                      }
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
