import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";
import '../pages/pages.css';
function Menus() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    return (
        <div>
            <h1>동물 보유 현황</h1> { (loginStatus) &&
            <button onClick={ () => navigate(`/menu/regist`) }>동물 등록</button> } { (loginStatus) && 
                <button onClick={ () => navigate(`/menu/search`) }>동물 검색</button> }
            <div className="mlist">
                <MenuList/>
            </div>
            

        </div>
    );
}

export default Menus;