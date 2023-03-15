import { Grid, Box, Typography } from '@mui/material';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import NavBar from '@/components/NavBar';


export default function Home() {

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
          NextJS - MaterialUI v5 - Template Project
        </Typography>

        <ProTip />

        <Copyright />

      </Grid>
    </Box>
  );
}