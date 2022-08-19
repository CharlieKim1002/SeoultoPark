import LoginForm from '../components/form/LoginForm';
import { Navigate } from 'react-router-dom';

function Login(){

    const loginStatus = !!localStorage.getItem('isLogin');

    if(loginStatus) {
        return <Navigate to="/" replace={ true }/>
    }

    return (
        <>
            <div id="loginFrom">
                <h1 id="loginTop">관리자 로그인</h1>
                <LoginForm/>  
            </div>
        </>
    );
}

export default Login;