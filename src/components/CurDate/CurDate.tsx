import React from 'react';
import './CurDate.css';


type State = {
   curDate: Date,
   daysOfWeek: Array<string>,
}

class CurDate extends React.Component <any, State> {
   timerID: any;
   constructor(props: string) {
      super(props);
      this.state = {
         curDate: new Date(),
         daysOfWeek: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
      };
   }

   componentDidMount() {
      this.updateWeek()
      this.timerID = setInterval( () => this.tick(), 2000);
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         curDate: new Date()
      });
      this.updateWeek()
   }

   updateWeek() {
      switch (this.state.curDate.getDay()) {
         case 0:
            this.setState({
               daysOfWeek: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
            })
            break;
         case 1:
            this.setState({
               daysOfWeek: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            })
            break;
         case 2:
            this.setState({
               daysOfWeek: ['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН']
            })
            break;
         case 3:
            this.setState({
               daysOfWeek: ['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН','ВТ']
            })
            break;
         case 4:
            this.setState({
               daysOfWeek: ['ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН','ВТ', 'СР']
            })
            break;
         case 5:
            this.setState({
               daysOfWeek: ['ПТ', 'СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ']
            })
            break;
         case 6:
            this.setState({
               daysOfWeek: ['СБ', 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ']
            })
            break;
         default:
            break;
      }
	}

   render() {
      return (
         <div className="CurDate block">
            <div className='CurDate__time'>
               {('0' + this.state.curDate.getHours()).slice(-2)}:
               {('0' + this.state.curDate.getMinutes()).slice(-2)}
            </div>
            <div className="CurDate__date">
               {('0' + this.state.curDate.getDate()).slice(-2)}.
               {('0' + (this.state.curDate.getMonth() + 1)).slice(-2)}.
               {this.state.curDate.getFullYear()}
            </div>
            <div className="CurDate__week">
               {
                  this.state.daysOfWeek.map((item: string, i: number) => (
                  <span key={i}>{item}</span>
                  ))
               }
            </div>
         </div>
      );
   }
}

export default CurDate;