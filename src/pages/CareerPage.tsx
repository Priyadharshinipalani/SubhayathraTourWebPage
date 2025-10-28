import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { Briefcase, MapPin, Clock, GraduationCap } from 'lucide-react';

const mockJobs = [
  {
    id: '1',
    title: 'Tour Guide',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Experienced tour guide needed for devotional tours. Must have knowledge of temple history and customs.',
    requirements: ['Excellent communication skills', 'Knowledge of South Indian temples', 'Fluent in Tamil, English, and Hindi', 'Valid driving license preferred']
  },
  {
    id: '2',
    title: 'Travel Coordinator',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Manage tour bookings, coordinate with hotels and transportation, ensure smooth tour operations.',
    requirements: ['Good organizational skills', 'Customer service experience', 'Computer proficiency', 'Ability to work flexible hours']
  },
  {
    id: '3',
    title: 'Customer Support Executive',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Handle customer inquiries, bookings, and provide information about tour packages.',
    requirements: ['Excellent communication skills', 'Customer-focused approach', 'Basic computer knowledge', 'Multilingual skills preferred']
  }
];

const CareerPage = () => {
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
            Career Opportunities
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
            Join our team and help create memorable travel experiences
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockJobs.map((job) => (
            <Grid item xs={12} md={6} key={job.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Briefcase size={24} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {job.title}
                      </Typography>
                    </Box>
                    <Chip
                      label={job.type}
                      size="small"
                      sx={{
                        bgcolor: '#e8f5e9',
                        color: '#2e7d32',
                        fontWeight: 600
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <MapPin size={16} />
                      <Typography variant="body2">{job.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <GraduationCap size={16} />
                      <Typography variant="body2">{job.experience}</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                    {job.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                      Requirements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {job.requirements.map((req, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body2"
                          sx={{ color: 'text.secondary', mb: 0.5 }}
                        >
                          {req}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2
                    }}
                    onClick={() => {
                      window.location.href = 'mailto:careers@subhayathratour.com?subject=Application for ' + job.title;
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center', p: 4, bgcolor: '#f8f9fa', borderRadius: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Don't see the right position?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Send us your resume and we'll keep you in mind for future opportunities.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2
            }}
            onClick={() => {
              window.location.href = 'mailto:careers@subhayathratour.com?subject=General Application';
            }}
          >
            Send Your Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerPage;
