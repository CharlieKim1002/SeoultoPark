import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    
    return (
        <div>
            <ul>
                <li><Link to='/' style={{ textDecoration : 'none', color:'white'}}>동물소개</Link></li>
                <li><Link to='/menu' style={{ textDecoration : 'none', color:'white'}}>탐험안내</Link></li>
                {/* localStorage 안의 값으로 로그인 여부 판단하여 조건부 랜더링 */}
                <li><Link to='./login' style={{ textDecoration : 'none', color:'white'}}>로그인</Link></li>
                
                <li ><a href="" style={{ textDecoration : 'none', color:'white'}}>로그아웃</a></li>
               

            </ul>
        </div>
    );
}

export default Navbar;