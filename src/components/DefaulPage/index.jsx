import { Header } from "../Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer"
export const DefaultPage = () => {
    return(
        <div>
             <Header />
             
             <Outlet />

             <Footer />
        </div>
    )
}