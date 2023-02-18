import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
              <div>
                  logo
              </div>
              <nav>
                  <li><Link to="/">teste</Link></li>
                  <li><Link to="/">teste</Link></li>
                  <li><Link to="/">teste</Link></li>
              </nav>
        </header>
    )
}