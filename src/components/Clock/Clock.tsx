import React, { useState } from 'react';
import './Clock.css';
import Acts from './Acts';
import ClockIcons from './Icons';
import clockImg from './img/clock.svg'


function Clock () {

   const [date, setDate] = useState(new Date())

   setInterval(() => arrowUpdate(), 60000);

   const arrowUpdate = () => {
      setDate(new Date());
   }

   return (
      <div className="Clock block">
         <img src={clockImg} className='Clock_img' alt="clock" />
         <Acts />
         <div className="Clock_arrow" style={{
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