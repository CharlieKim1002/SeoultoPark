import { Navigate } from 'react-router-dom';
import MenuModifyForm from '../components/form/MenuModifyForm';

function MenuModify() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <MenuModifyForm/>
        </>
    );
}

export default MenuModify;