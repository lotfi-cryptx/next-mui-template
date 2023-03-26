import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import Link from "@/components/Link";
import ThemeSwitch from "./ThemeSwitch";

const pages = [
  { name: 'Users', href: '/users' },
  { name: 'Projects', href: '/projects' },
]

export default function NavBar() {

  const router = useRouter();

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  })

  return (
    <AppBar position="static" elevation={1}>
      <StyledToolBar>

        <Typography
          variant="h5"
          noWrap
          component={Link}
          href="/"
          marginRight={1}
          margin={0}
          color="inherit"
          display="block"
          fontWeight={700}
          letterSpacing=".1rem"
          sx={{
            textDecoration: "none",
          }}
        >
          Dashboard
        </Typography>

        <Box
          marginX={1}
          marginY={0}
          flex={1}
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            }
          }}
        >

          {pages.map(({ name, href }) => (
            <Typography
              key={name}
              variant="button"
              noWrap
              component={Link}
              href={href}
              marginX={2}
              marginY={0}
              color="inherit"
              display="block"
              fontWeight={700}
              sx={{
                textDecoration: router.pathname.includes(href) ? 'underline' : 'none',
              }}
            >
              {name}
            </Typography>
          ))}

        </Box>

        <ThemeSwitch />

        <Button
          color='inherit'
        >
          Login
        </Button>

      </StyledToolBar>
    </AppBar>
  )
}