import './NavBar.css';
import { FiMoreVertical } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from "../Images/MustardHabitLogo.png";
import { useNavigate } from 'react-router-dom';

function NavBar () {

    const navigate = useNavigate();

    return (
        <nav className='NavBar'>            
                <div className='LogoContainer' onClick={() => navigate('/mustard-habit-project-talentotech')}>
                    <img src={Logo} alt='Logo' className='Logo'/>
                    <b>MustardHabit</b>                      
                </div>

                <div className='GraficsContainer'>
                    <FiBarChart className='GraficsIcon' onClick={ () => navigate('/mustard-habit-project-talentotech/calendar') }/>

                    <FiMoreVertical className='MenuIcon'/>
                    
                    <FiUser className='UserIcon'/>       
                </div>

        </nav>
    )
}

export {NavBar};