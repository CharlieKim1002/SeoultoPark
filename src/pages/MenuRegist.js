
import { Navigate } from 'react-router-dom';
import MenuRegistForm from '../components/form/MenuRegistForm';

function MenuRegist() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <MenuRegistForm/>
        </>
    );
}

export default MenuRegist;