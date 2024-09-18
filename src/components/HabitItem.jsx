import '../styles/HabitItem.css'

// eslint-disable-next-line react/prop-types
function HabitItem ({text, streak}) {

    console.log()
    return (
        <li className='HabitItem'>
            <span>V</span>
            <div>
                <p>
                    {text}
                </p>
                <small>
                    {streak}
                </small>
            </div>            
            <span>
                set
            </span>
        </li>
    )           
};

export {HabitItem};