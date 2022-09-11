import React from 'react';
import { ResetType } from '../..';
import Icon from '../Icons/Icon';


type Props = {
   color: string,
   svgId: number,
   totalTime: number,
   recordedTime: number,
   reset: ResetType
}

type State = {
   isActive: boolean
}

class Bubble extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = {
         isActive: false
      }
   }

   countDashoffset() {
      if (this.props.recordedTime >= this.props.totalTime) {
         return '0'
      }
      return String((this.props.recordedTime * 188.4) / this.props.totalTime)
   }

   countRemainingMinutes() {
      let recordedTime = this.props.recordedTime
      let totalTime = this.props.totalTime

      if (recordedTime >= totalTime) {
         let result: (number | string) = recordedTime - totalTime;
         return (result > 0) ? ('+' + String(result)) : '✔'
      }

      return String(totalTime - recordedTime)
   }

   printBubbleBG() {
      let scale = 0.89
      let opacity = 0

      switch (this.state.isActive) {
         case true:
            scale = 0.89
            opacity = 0.3
            break;
         case false:
            if (this.props.totalTime > this.props.recordedTime) {
               scale = 0.7
               opacity = 0.15
            } else {
               opacity = 0
            }
            break;
      }

      let bubbleBG = <div className='Bubble_background'
         style={{
            backgroundColor: this.props.color,
            transform: `scale(${String(scale)})`,
            opacity: opacity,
         }}></div>

      return bubbleBG
   }

   printBubbleSvg() {
      let opacity = 1
      if (this.props.totalTime <= this.props.recordedTime
         && this.state.isActive === false) {
         opacity = 0.2
      }

      let bubbleCircle = <circle r='30' cx="36px" cy="36px" fill="none"
         stroke={this.props.color}
         strokeWidth='4'
         strokeDasharray={'188.4'
         }
         strokeDashoffset={'-' + this.countDashoffset()}
      ></circle>

      let bubbleSvg = <svg className='Bubble_svg' width='72' height='72'
         style={{
            transform: `rotateZ(-90deg)`,
            opacity: opacity
         }}
      >{bubbleCircle}</svg>


      return bubbleSvg
   }

   printBubbleContent() {
      let opacity = 1

      if (this.props.totalTime > this.props.recordedTime) {
         opacity = 0.8
      } else {
         opacity = 0.2
      }

      let bubbleContent = <div className='Bubble_content'
         style={{ opacity: opacity }}>
         <Icon color='white' rotateZ='0' svgId={this.props.svgId} height='20' width='20' />
         <div className='Bubble_text'>{this.countRemainingMinutes()}</div>
      </div>

      return bubbleContent
   }

   render() {
      return (
         <div className='Bubble'>
            {this.printBubbleBG()}
            {this.printBubbleSvg()}
            {this.printBubbleContent()}
         </div>
      )
   }
}


export default Bubble