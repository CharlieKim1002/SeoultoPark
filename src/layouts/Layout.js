import { Outlet } from 'react-router-dom'
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import Navbar from '../components/commons/Navbar';
import "./Layout.css";

function Layout() {
    
    return (
        <div id='home' className='background'>
            <div className='top'>
                <Header/>
                <Navbar/>
            </div>
            <div className='middle'>
                <Outlet/>
            </div>
            <div className='foot'>
                <Footer/>
            </div>
        </div>
        
            
       
    );
}

export default Layout;