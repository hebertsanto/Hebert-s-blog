import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { DefaultPage } from "./components/DefaulPage"


export const RouterComponent = () => {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<DefaultPage />} />
            </Routes>
        </Router>
    )
}