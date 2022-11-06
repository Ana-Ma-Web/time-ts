import React, { useEffect, useState } from 'react';
import styles from './CurDate.module.css';

function CurDate() {
   const [curDate, setCurDate] = useState(new Date())
   const [daysOfWeek, setDaysOfWeek] = useState(['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'])

   let timerID = setInterval(() => tick(), 2000);

   useEffect(() => {
      return () => {
         clearInterval(timerID)
      };
   });

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
      <div className={styles.CurDate + ' block'}>
         <div className={styles.time}>
            {('0' + curDate.getHours()).slice(-2)}:
            {('0' + curDate.getMinutes()).slice(-2)}
         </div>
         <div className={styles.date}>
            {('0' + curDate.getDate()).slice(-2)}.
            {('0' + (curDate.getMonth() + 1)).slice(-2)}.
            {curDate.getFullYear()}
         </div>
         <div className={styles.week}>
            {
               daysOfWeek.map((item: string, i: number) => (
                  <span key={i}>{item}</span>
               ))
            }
         </div>
      </div>
   );

}

export default CurDate;