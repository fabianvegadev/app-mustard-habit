import './DateBar.css'; 
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const daysOfWeek = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];
const monthsOfYear = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];


const DateBar = (props) => {
  
  const getShowDaysWithDates = (date) => {
    const showDaysWithDates = [ ];
    const today = new Date(date);
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - today.getDay() + i);      
      var month = monthsOfYear[day.getMonth()]
      var year = day.getFullYear()
      const fullDay = day.toLocaleDateString()
      props.daysWithDates.map((d) => {
        console.log(d.allCompleted)
        if (fullDay === d.fullDate) {
          showDaysWithDates.push(
            {
              name: daysOfWeek[i],
              day: day.getDate(),
              fullDate: d.fullDate,
              allCompleted: d.allCompleted
            }
          )
        }
      })    
    };
    return [showDaysWithDates, month, year];
  }

  
    const [showDaysWithDates, month, year] = getShowDaysWithDates(props.changeWeek)
  
  


  return (
    <div className="datebarContainer">

      <div className='arrowContainer'>
        <b className='month'>{month}</b>
        <button 
          onClick={props.handlePreviousWeek}> 
            <FiArrowLeft/></button>
      </div>

      <div className='datebarCenterContainer'>
        {showDaysWithDates.map((item, index) => 
            <div
              key={index}
              className='dayContainer'>

              <b>{item.day}</b>
              <button                
                title={[item.fullDate]}
                onClick={(e) => props.selectDay (e)}
                className={`${(item.allCompleted == true) & (props.habits.length != 0) && 'allCompleted'}
                            ${(props.selectedDay === item.fullDate) && 'selectedDay'}`}>
                {item.name}
                {(item.allCompleted === true & props.habits.length != 0) ? <FaRegCheckCircle className='IconCheck' size={16}/> : <div></div>}          
              </button>

            </div>
          )}
      </div>       
      
      <div className='arrowContainer'>
        <b className='year'>{year}</b>
        <button 
          onClick={props.handleNextWeek}> 
            <FiArrowRight/></button>
      </div>

    </div>
  );
};

export {DateBar};
