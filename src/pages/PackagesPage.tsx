import { Box, Container, Typography } from '@mui/material';
import Packages from '../components/Packages';

const PackagesPage = () => {
  return (
    <>
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
            Tour Packages
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
            Explore our comprehensive devotional tour packages
          </Typography>
        </Container>
      </Box>
      <Packages />
    </>
  );
};

export default PackagesPage;
