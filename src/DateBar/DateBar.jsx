import './DateBar.css'; 
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const daysOfWeek = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];

const DateBar = (props) => {
  
  const getShowDaysWithDates = (date) => {
    const showDaysWithDates = [ ];
    const today = new Date(date);
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - today.getDay() + i);
      const dia = day.getDate()
      const mes = day.getMonth() + 1
      const fullDay = day.toLocaleDateString()
      props.daysWithDates.map((day) => {
        if (fullDay === day.fullDate) {
          showDaysWithDates.push(
            {
              name: daysOfWeek[i],
              dia: dia,
              mes: mes,
              fullDate: day.fullDate,
              allCompleted: day.allCompleted
            }
          )
        }
      })    
    };
    return showDaysWithDates;
  }

  const showDaysWithDates = getShowDaysWithDates(props.currentDate)

  return (
    <div className="date-bar-container">
      <button onClick={props.handlePreviousWeek} className="date-bar-button">
        <FiArrowLeft/>
      </button>

      {showDaysWithDates.map((item, index) => (
        // console.log(item),
        <div 
          title={[item.fullDate]}
          onClick={(e) => props.selectDay (e)}
          key={index}           
          className={
            `date-bar-day 
            ${(item.allCompleted == true)
              & (props.habits.length != 0)
              && 'felicitaciones'}            
            ${props.selectedDay === (item.fullDate) 
                && 'selectedDay'} 
                `}
        >
          {(item.allCompleted === true & props.habits.length != 0) 
            ? <div className='IconCheck'> <FaRegCheckCircle/> </div> 
            : <div/>}          
          <div className='text-date'>{item.name}</div>
          <div>{item.dia}</div>
          <div>{item.mes}</div>
        </div>
      ))}

      <button onClick={props.handleNextWeek} className="date-bar-button">
        <FiArrowRight/>
      </button>
    </div>
  );
};

export {DateBar};
