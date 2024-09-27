import './DateBar.css';
import { FaRegCheckCircle } from "react-icons/fa";

function ContainerDia (props){
    return (
        <div className='containerCentral'>
            <div className='containerDia'>
                {props.item.dia}
            </div>
            <div 
                title={[props.item.fullDate]}
                onClick={(e) => props.selectDay (e)}
                key={props.index}           
                className={
                `date-bar-day 
                ${(props.item.allCompleted == true)
                    & (props.habits.length != 0)
                    && 'allCompleted'}            
                ${props.selectedDay === (props.item.fullDate) 
                    && 'selectedDay'} 
                    `}
            >
                {(props.item.allCompleted === true & props.habits.length != 0)
                    ? <div className='IconCheck'> <FaRegCheckCircle/> </div>
                    : <div></div>}          
                <div className='text-date'>{props.item.name}</div>
            </div>
        </div>
    )
}
export { ContainerDia };