import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// const useStyles = makeStyles({
//    date: {
//       "fontWeight": 700,
//       marginBottom: 5,
//    },
//    day: {
//       '&:first-child': {
//          textDecoration: 'underline',
//       },
//    },
//    dayText: {
//       "fontWeight": 600,
//    },
// });

function CurDate() {
   const [curDate, setCurDate] = useState(new Date())
   const [daysOfWeek, setDaysOfWeek] = useState(['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'])

   // const classes = useStyles();


   let timerID = setInterval(() => tick(), 2000);

   useEffect(() => {
      tick()
      return () => {
         clearInterval(timerID)
      };
   }, []);

   const tick = () => {
      setCurDate(new Date());
      updateWeek()
   }

   const updateWeek = () => {
      switch (curDate.getDay()) {
         case 0:
            setDaysOfWeek(['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'])
            break;
         case 1:
            setDaysOfWeek(['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'])
            break;
         case 2:
            setDaysOfWeek(['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН'])
            break;
         case 3:
            setDaysOfWeek(['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ'])
            break;
         case 4:
            setDaysOfWeek(['ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ', 'СР'])
            break;
         case 5:
            setDaysOfWeek(['ПТ', 'СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ'])
            break;
         case 6:
            setDaysOfWeek(['СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'])
            break;
         default:
            break;
      }
   }

   return (
      <>
         <Typography variant='h4' component='div'>
            {('0' + curDate.getHours()).slice(-2)}:
            {('0' + curDate.getMinutes()).slice(-2)}
         </Typography>
         <Typography variant='caption' component='div'>
            {('0' + curDate.getDate()).slice(-2)}.
            {('0' + (curDate.getMonth() + 1)).slice(-2)}.
            {curDate.getFullYear()}
         </Typography>
         <Grid container spacing={1} >
            {
               daysOfWeek.map((item: string, i: number) => (
                  <Grid item key={i}
                  // className={classes.day}
                  >
                     <Typography variant='body2' component='div'
                     // className={classes.dayText}
                     >
                        {item}
                     </Typography>
                  </Grid>
               ))
            }

         </Grid>
      </>
   );

}

export default CurDate;