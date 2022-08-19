import { Link } from  'react-router-dom';

function MenuItem({ menu }) {

    return (
        <Link to={ `/menu/${ menu.id }` }>
            <div className="menuItem">
                <h3>이름 : { menu.animalName }</h3>
                <h3>종류 : { menu.categoryName }</h3>
                <img src={ menu.detail.image } style={ { maxWidth: 280, maxHeight : 150 } } alt={ menu.menuName }/>
            </div>
        </Link>
    );
}

export default MenuItem;