import { Link } from "react-router-dom"
import style from './header.module.css'
export const Header = () => {
    return(
        <header className={style.Header}>
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