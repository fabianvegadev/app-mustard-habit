import './NavBar.css';
import { FiMoreVertical } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from "./LogoMustardHabit.png";

function NavBar () {

    return (
        <nav className='NavBar'>            
                <div className='LogoContainer'>
                    <img src={Logo} alt='Logo' className='Logo'/>                        
                </div>

                <div className='GraficsContainer'>
                    <FiBarChart className='GraficsIcon'/>
                </div>

                <div className='MenuContainer'>
                    <FiMoreVertical className='MenuIcon'/>
                </div>

                <div className='UserContainer'>
                    <FiUser className='UserIcon'/>
                </div>
        </nav>
    )
}

export {NavBar};