import React from 'react';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Bubbles from './components/Bubbles/Bubbles';
import Tasks from './components/Tasks/Tasks';
import { Box } from '@mui/material';
// import { makeStyles } from '@mui/material';
// import { ActivityType } from '.';

// interface TaskContextProps {
//   iconsInWidget: ActivityType[]
// }

// export const TasksContext = React.createContext({} as TaskContextProps);

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));


function App(props: any) {


  return (
    <Container>
      <Grid container
        justifyContent="center" spacing={4}
        sx={{
          padding: 4,
        }}
        >
        <Grid item>
          <Item
            elevation={0}>
            <CurDate />
          </Item>
        </Grid>
        <Grid item>
          <Item
            elevation={0}>
            <Clock />
          </Item>
        </Grid>
        <Grid item>
          <Item
            elevation={0}>
            <Box
            sx={{textAlign: 'left',}}>
              <Tasks />
            </Box>
          </Item>
        </Grid>
        <Grid item>
          <Item
            elevation={0}>
            <Bubbles />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
