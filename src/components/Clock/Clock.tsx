import React, { useState } from 'react';
import styles from './Clock.module.css';
import Acts from './Acts/Acts';
import ClockIcons from './Icons/Icons';
import clockImg from './img/clock.svg'

function Clock () {

   const [date, setDate] = useState(new Date())

   setInterval(() => arrowUpdate(), 60000);

   const arrowUpdate = () => {
      setDate(new Date());
   }

   return (
      <div className={styles.Clock + ' block'}>
         <img src={clockImg} className={styles.img} alt="clock" />
         <Acts />
         <div className={styles.arrow} style={{
            transform: `rotateZ(${(
               (date.getHours() * 15) +
               (date.getMinutes() * 0.25) +
               180)}deg)`
         }}>
         </div>
         <ClockIcons />
      </div>
   )
}

export default Clock