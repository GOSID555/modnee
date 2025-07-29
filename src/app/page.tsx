'use client';

import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import AllForm from '@/components/form/FromAll';
import { grey, purple } from '@mui/material/colors';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero (White Background) */}
      <Box
        sx={{
          bgcolor: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={900}>
            Take Control of Your Debt
          </Typography>
          <Typography variant="h6" fontWeight={500} mt={2}>
            Plan your path to financial freedom with our easy-to-use debt payoff calculator.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              backgroundColor: purple[500],
              '&:hover': { backgroundColor: purple[600] },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Section 2: Banner / Highlight (Light Gray Background) */}
      <Box
        sx={{
          bgcolor: grey[100],
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              bgcolor: grey[200],
              borderRadius: 2,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              [Your Banner Message or Graphic]
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Section 3: Calculator Form (Gray Background) */}
      <Box
        sx={{
          bgcolor: grey[50],
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight={900}>
              Debt Payoff Calculator
            </Typography>
            <Typography fontWeight={500} mt={1}>
              Enter your financial information below to see how quickly you can become debt-free.
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <AllForm />
          </Paper>
        </Container>
      </Box>
    </>
  );
}