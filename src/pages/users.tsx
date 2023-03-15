import { Grid, Box, Typography, Button } from '@mui/material';
import Link from '@/components/Link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import NavBar from '@/components/NavBar';

export default function Users() {

  return (
    <Box>
      <NavBar />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: '100vh'
        }}
      >

        <Typography variant="h4" component="h1" gutterBottom>
          Users Page
        </Typography>

        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>

        <ProTip />

        <Copyright />

      </Grid>
    </Box>
  );
}