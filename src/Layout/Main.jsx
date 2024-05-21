import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration');
    return (
        <div>
            { noHeaderFooter  || <Header /> }
            <Outlet /> 
            { noHeaderFooter || <Footer /> }
        </div>
    );
};

export default MainLayout;