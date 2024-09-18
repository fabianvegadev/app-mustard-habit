import '../styles/HabitItem.css'

// eslint-disable-next-line react/prop-types
function HabitItem ({text}) {

    return (
        <li className='habitItem'>
            <button>V</button>
            <p>{text}</p>               
            <button>set</button>
        </li>
    )           
};

export {HabitItem};