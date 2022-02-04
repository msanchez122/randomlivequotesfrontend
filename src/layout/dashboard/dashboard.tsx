import { Drawer } from 'material-ui'
import React from 'react'
import DashboardSideNavigation from '../dashboard/dashboard-navigation-side'
import { Grid } from '@material-ui/core';
type Props = {
    children : React.ReactNode;
}
function Dashboard({children} : Props) {
  return (
    <div>
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <DashboardSideNavigation />
      {children}
    </Grid>
    </div>
  )
}

export default Dashboard
