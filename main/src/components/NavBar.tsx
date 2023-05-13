import { Link } from 'react-router-dom'
import Logo from './../resources/animate-icon-4.jpg'
import './NavBar.scss'

export default function NavBar() {
    return <nav id="navbar">
        <p>
            <img src={Logo} alt="" />
            <a href="/">The <span>Solo Animator</span> Curriculum</a>
        </p>
        <ul>
            <li>
                <Link to="/Storytelling">Storytelling</Link>
            </li>
            <li>
                <Link to="/Drawing">Drawing</Link>
            </li>
            <li>
                <Link to="/Animation">Animation</Link>
            </li>
            <li>
                <Link to="/Music">Music</Link>
            </li>
            <li>
                <Link to="/Resources">Resources</Link>
            </li>
            <li>
                <Link to="https://github.com/TekuConcept/IndiAnimatorCurriculum">GitHub</Link>
            </li>
        </ul>
    </nav>
}
