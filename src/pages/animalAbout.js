import "./pages.css";
import MenuList from "../components/lists/MenuList";
​​
function animalAbout() {
​
    return (
        <>
            <h1>동물 소개</h1>
                <button>가나다 순 정렬</button>
            <MenuList/>
        </>
    );
}
​
export default animalAbout;