import "./LoginForm.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";

function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    const [loginInfo, setLoginInfo] = useState(
        {
            id : '',
            password : ''
        }
    );

    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    const onClickHandler = () => {

        dispatch(callLoginAPI(loginInfo));
    }

    useEffect(
        () => {
            
            if(result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        id : '',
                        password : ''
                    }
                );
                dispatch(resetLoginUser());    
            } else if(loginStatus){
                navigate('/');
            } 
        }, // eslint-disable-next-line
        [result]
    );

    return (
        <>
            <div className="login">
                <p><label>ID </label>
                <input type="text" name="id"value={ loginInfo.id } onChange={ onChangeHandler }/> &nbsp;&nbsp;&nbsp;</p>
                <p><label>PW </label>
                <input type="password" name="password" value={ loginInfo.password } onChange={ onChangeHandler }/></p>
                <button onClick={ onClickHandler }>로그인</button>
            </div>
        </>
    );
}

export default LoginForm;