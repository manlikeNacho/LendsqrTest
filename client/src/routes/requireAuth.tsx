import NavBar from "../components/NavBar/navBar"
import { Outlet} from "react-router-dom"


const RequireAuth:React.FC = () => {

    return (
        <div className="require-auth">
            <NavBar/>
            <Outlet />
        </div>
    )
}

export default RequireAuth