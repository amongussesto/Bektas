import '../App.css';
import {NavLink} from "react-router-dom"

function header(){
    return(
        <div className="header">
           <ul className="header-title">
               <NavLink to="/"><li>Home</li></NavLink> 
               <NavLink to="/secondPage"><li>About Us</li></NavLink> 
               <NavLink to="/"><li>Portfolio</li></NavLink> 
               <NavLink to="/"><li>Expertise</li></NavLink> 
               <NavLink to="/"><li>Clients</li></NavLink> 
               <NavLink to="/"><li>Services</li></NavLink> 
               <NavLink to="/"><li>Contact Us</li></NavLink> 
           </ul>
        </div>
    )
}
export default header