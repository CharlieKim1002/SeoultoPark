import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";
import "./Navbar.css";

function Navbar() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* 로그아웃 호출 시 localStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동  */
    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/');
    }
    
    return (
        <div>
            <ul>
            { !loginStatus ? (
                        <li><NavLink to='/'>Home</NavLink></li>
                        
                    ) : (
                        <></>
                    )
                }

            { !loginStatus ? (
                        <li><NavLink to='/menu'>동물소개</NavLink></li>
                        
                    ) : (
                        <li><NavLink to='/menu'>동물보유현황</NavLink></li>
                    )
                }

            { !loginStatus ? (
                        <li><NavLink to='/'>탐험안내</NavLink></li>
                        
                    ) : (
                        <></>
                    )
                }

            { !loginStatus ? (
                        <li><NavLink to='/'>티켓구매</NavLink></li>
                        
                    ) : (
                        <></>
                    )
                }    

                {/* localStorage 안의 값으로 로그인 여부 판단하여 조건부 랜더링 */}
                { !loginStatus ? (
                        <li><NavLink to='/login'>로그인</NavLink></li>
                    ) : (
                        <li onClick={ logoutHandler }><a href="">로그아웃</a></li>
                        
                    )
                }      

            </ul>
        </div>
    );
}

export default Navbar;