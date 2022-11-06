import React, { useState } from 'react';
import { ResetType } from '../../..';
import styles from './Bubble.module.css'
import Icon from '../../Icons/Icon';


type Props = {
   color: string,
   svgId: number,
   totalTime: number,
   recordedTime: number,
   reset: ResetType
}

function Bubble(props: Props) {

   const [isActive, setIsActive] = useState(false)

   const countDashoffset = () => {
      if (props.recordedTime >= props.totalTime) {
         return '0'
      }
      return String((props.recordedTime * 188.4) / props.totalTime)
   }

   const countRemainingMinutes = () => {
      let recordedTime = props.recordedTime
      let totalTime = props.totalTime

      if (recordedTime >= totalTime) {
         let result: (number | string) = recordedTime - totalTime;
         return (result > 0) ? ('+' + String(result)) : '✔'
      }

      return String(totalTime - recordedTime)
   }

   const printBubbleBG = () => {
      let scale = 0.89
      let opacity = 0

      if (isActive) {
         scale = 0.89
         opacity = 0.4
      } else {
         if (props.totalTime > props.recordedTime) {
            scale = 0.7
            opacity = 0.15
         } else {
            opacity = 0
         }
      }

      let bubbleBG = <div className={styles.background}
         style={{
            backgroundColor: props.color,
            transform: `scale(${String(scale)})`,
            opacity: opacity,
         }}></div>

      return bubbleBG
   }

   const printBubbleSvg = () => {
      let opacity = 1
      if (props.totalTime <= props.recordedTime
         && isActive === false) {
         opacity = 0.2
      }

      let bubbleCircle = <circle r='30' cx="36px" cy="36px" fill="none"
         stroke={props.color}
         strokeWidth='4'
         strokeDasharray={'188.4'
         }
         strokeDashoffset={'-' + countDashoffset()}
      ></circle>

      let bubbleSvg = <svg className={styles.svg} width='72' height='72'
         style={{
            transform: `rotateZ(-90deg)`,
            opacity: opacity
         }}
      >{bubbleCircle}</svg>

      return bubbleSvg
   }

   const printBubbleContent = () => {
      let opacity = 1

      if (props.totalTime > props.recordedTime) {
         opacity = 0.8
      } else {
         opacity = 0.2
      }

      let bubbleContent = <div className={styles.content}
         style={{ opacity: opacity }}>
         <Icon color='white' svgId={props.svgId} height='20' width='20' />
         <div className={styles.text}>{countRemainingMinutes()}</div>
      </div>
      return bubbleContent
   }

   const changeActive = () => {
      isActive ? setIsActive(false) : setIsActive(true)
   }

   return (

      <div className={styles.Bubble} onClick={() => changeActive()}>
         {printBubbleBG()}
         {printBubbleSvg()}
         {printBubbleContent()}
      </div>
   )
}

export default Bubble