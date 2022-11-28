import React from 'react';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
// import { makeStyles } from '@mui/material';
// import { ActivityType } from '.';

// interface TaskContextProps {
//   iconsInWidget: ActivityType[]
// }

// export const TasksContext = React.createContext({} as TaskContextProps);

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#34395038' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));



// const useStyles = makeStyles({
//   root: {
//     textAlign: 'center',
//     padding: 12,
//     // color: 'white',
//   },
//   paper: {
//     padding: '15px',
//     position: 'relative',
//   },
// });

function App(props: any) {


  // const classes = useStyles();


  return (
      <Container>

        <Grid container
          justifyContent="center" spacing={4}>
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
              <Tasks />
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
