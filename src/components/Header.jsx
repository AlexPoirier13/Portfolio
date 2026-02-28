import '../components/Header.css'
import { Link } from "react-router-dom";

function Header(){

    return (
        <header>

            <nav>
                
                <ul>
                    <li><span><Link to="/">About</Link></span></li>
                    <li><span><Link to="/#skills">Skills</Link></span></li>
                    <li><span><Link to="/#projects">Projects</Link></span></li>
                    <li><span><Link to="/#contacts">Contacts</Link></span></li>
                </ul>

            </nav>

        </header>
    )

}

export default Header