import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout(){
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>

        </>
        
    );
}
export default Layout;