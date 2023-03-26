import DashboardLayout from "@/components/DashboardLayout";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <Typography variant="h3" component="p" textAlign="center">
          Users Page
        </Typography>
      </div>
    </DashboardLayout>
  )
}
