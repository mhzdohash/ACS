import { NavLink } from "react-router-dom"

function NavBar() {
    return ( 
        <nav>
            <ul className="flex gap-3 text-3xl font-Montserrat">
                <li><NavLink className="hover:underline" to="/"> Home</NavLink></li>
                <li><NavLink className="hover:underline" to="filmes">Filmes</NavLink></li>
                <li><NavLink className="hover:underline" to="favoritos">Favoritos</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar