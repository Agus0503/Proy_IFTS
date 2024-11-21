import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

function Layout() {
    return (
        <div>
            <Navigation />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
