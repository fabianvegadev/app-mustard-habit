import './DateBar.css'; 
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const DateBar = (props) => {
  
  

  return (
    <div className="date-bar-container">
      <button onClick={props.handlePreviousWeek} className="date-bar-button">
        <FiArrowLeft/>
      </button>

      {props.daysWithDates.map((item, index) => (
        // console.log(item),
        <div 
          title={[item.fullDate]}
          onClick={(e) => props.selectDay (e)}
          key={index}           
          className={
            `date-bar-day 
            ${(item.allCompleted == true)
              // & props.habits.length != 0)
              ? 'felicitaciones'
              : item.fullDate === props.efectCurrentDay
                && 'currentDay'}            
            ${(props.selectedDay === (item.fullDate) 
              & item.fullDate != props.efectCurrentDay)
                && 'selectedDay'} 
                `}
        >
          {(item.allCompleted === true & props.habits.length != 0) 
            ? <div className='IconCheck'> <FaRegCheckCircle/> </div> 
            : <div/>}          
          <div className='text-date'>{item.name}</div>
        </div>
      ))}

      <button onClick={props.handleNextWeek} className="date-bar-button">
        <FiArrowRight/>
      </button>
    </div>
  );
};

export {DateBar};
