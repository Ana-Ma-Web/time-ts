import React from 'react';

import { makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

// import './App.css';
import CurDate from "./components/CurDate/CurDate";
import Clock from "./components/Clock/Clock";
import Tasks from './components/Tasks/Tasks';
import Bubbles from './components/Bubbles/Bubbles';
// import { ActivityType } from '.';
import { Container, Grid, Paper } from '@material-ui/core';

// interface TaskContextProps {
//   iconsInWidget: ActivityType[]
// }

// export const TasksContext = React.createContext({} as TaskContextProps);

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: 12,
    // color: 'white',
  },
  paper: {
    padding: '15px',
    position: 'relative',
  },
});

function App(props: any) {

  const theme = createMuiTheme({
    palette: {
      common: {
        black: '#222531',
        white: '#222531',
      },
      type: 'dark',
      background: {
        paper: '#34395038',
      },
    },
    typography: {
      fontFamily: [
        'Nunito'
      ].join(',')
    },
  })

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container className={classes.root}
          justifyContent="center" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}
              elevation={0}>
              <CurDate />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}
              elevation={0}>
              <Clock />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}
              elevation={0}>
              <Tasks />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}
              elevation={0}>
              <Bubbles />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
