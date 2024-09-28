import './NavBar.css';
import { FiMoreVertical } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from "./LogoMustardHabit.png";
import { useNavigate } from 'react-router-dom';

function NavBar () {

    const navigate = useNavigate();

    return (
        <nav className='NavBar'>            
                <div className='LogoContainer' onClick={() => navigate('/')}>
                    <img src={Logo} alt='Logo' className='Logo'/>
                    <p>MustardHabit</p>                      
                </div>

                <div className='GraficsContainer'>
                    <FiBarChart className='GraficsIcon' onClick={ () => navigate('/calendar') }/>

                    <FiMoreVertical className='MenuIcon'/>
                    
                    <FiUser className='UserIcon'/>       
                </div>

        </nav>
    )
}

export {NavBar};