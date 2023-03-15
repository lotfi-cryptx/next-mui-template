import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Link from "@/components/Link"
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const pages = [
  { name: 'Users', link: '/users' },
  { name: 'Projects', link: '/projects' },
  { name: 'About', link: '/about' },
]

const settings = [
  { name: 'My Account', link: '/account' },
  { name: 'Logout', link: '/logout' },
];

export default function NavBar() {

  const { pathname } = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dashboard
          </Typography>


          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dashboard
          </Typography>


          <Box sx={{ mx: 4, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, link }) => (
              <Typography
                key={name}
                variant="button"
                noWrap
                component={Link}
                href={link}
                sx={{
                  my: 2,
                  mx: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 700,
                  textDecoration: pathname.includes(link) ? 'underline' : 'none',
                }}
              >
                {name}
              </Typography>
            ))}
          </Box>

          <Box sx={{ mx: 2, flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <ThemeSwitch />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/lotfi.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ name, link }) => (
                <MenuItem key={name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
