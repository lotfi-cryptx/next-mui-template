import { Box, Fade, Grow, Slide, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import RightBar from "@/components/RightBar";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import useUser from "@/hooks/useUser";
import { appStateEnum, appStateStore } from "@/store/appState";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  const { status } = useUser();

  const appState = appStateStore((state) => state.appState)
  const setAppState = appStateStore((state) => state.setAppState)

  if (appState === appStateEnum.Initial || appState === appStateEnum.BannerShown) {
    return (
      <Box
        bgcolor="background.default"
        color="text.primary"
        minHeight="100vh"
      >
        <Stack
          spacing={0}
          justifyContent="center"
          alignItems="center"
          style={{
            minHeight: '100vh'
          }}
        >
          <Grow
            in={(appState === appStateEnum.Initial || status === "loading") ? true : false}
            timeout={status === "loading" ? 1000 : 200}
            onEntered={() => { setAppState(appStateEnum.BannerShown); console.log("Banner shown") }}
            onExited={() => { setAppState(appStateEnum.BannerClosed); console.log("Banner closed") }}
          >
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
          </Grow>
        </Stack>
      </Box>
    )
  }

  const AppStack = () => (
    <Stack direction="row" spacing={0} justifyContent="space-between" alignItems="center" pt={8}>

      <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <SideBar />
      </Box>

      <Box flex={4}>
        {children}
      </Box>

      <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <RightBar />
      </Box>

    </Stack >
  )

  if (appState === appStateEnum.BannerClosed) {
    return (
      <Box
        bgcolor="background.default"
        color="text.primary"
        minHeight="200vh"
      >
        <Box
          position="fixed"
          minWidth="100%"
          height={8}
        >
          <Slide
            in={true}
            timeout={500}
            onEntered={() => { setAppState(appStateEnum.DashboardLoaded); console.log("dashboard loaded") }}
          >
            <Box>
              <NavBar />
            </Box>
          </Slide>
        </Box>

        <Fade
          in={true}
          timeout={500}
        >
          <Box>
            <AppStack />
          </Box>
        </Fade>

      </Box >
    )
  }

  return (
    <Box
      bgcolor="background.default"
      color="text.primary"
      minHeight="200vh"
    >
      <Box
        position="fixed"
        minWidth="100%"
      >
        <NavBar />
      </Box>

      <AppStack />

    </Box >
  )
}
