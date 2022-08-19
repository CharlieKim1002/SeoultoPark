import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';

function Menu({ id }) {

    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
        },
        []
    );

    return (
        menu && (
            <div className='seti'>
                <img src={ menu.detail.image } style={ { maxWidth: 500 } } alt={ menu.menuName }/>
                <h3>이름 : { menu.animalName }</h3>
                <h3>종류 : { menu.categoryName }</h3>
                <h3>정보 : { menu.detail.description }</h3>
            </div>
        )
    );
}

export default Menu;