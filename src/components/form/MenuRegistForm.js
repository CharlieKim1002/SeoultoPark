import "./Regist.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistMenuAPI } from '../../apis/MenuAPICalls';

function MenuRegistForm() {

    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* 입력 값 state 저장 */
    const [registMenu, setRegistMenu] = useState(
        {
            id: 0,
            animalName: '',
            categoryName: '조류',
            detail : {
                description: '',
                image: ''
            }
        }
    );
    
    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        switch(name) {
            case 'description' : 
                name = 'detail';
                value = {
                    description : value,
                    image : registMenu.detail.image
                };
                break;
            default:
                break;
        }

        setRegistMenu(
            {
                ...registMenu,
                [name] : value
            }
        );

    }

    /* 파일 첨부 시 동작하는 이벤트 핸들러 */
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setRegistMenu(
            {
                ...registMenu,
                detail : {
                    description : registMenu.detail.description,
                    image : base64
                }
            }
        );
    }

    /* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

      
      useEffect(
        () => {
            /* 메뉴 등록 완료 확인 후 /menu로 이동 */
            if(result.regist) {
                alert('동물 등록');
                navigate(`/menu`);
            }
        },
        [result]
      );

    const onClickHandler = () => {
        /* registMenu에 대한 유효성 검사 후 호출 */
        dispatch(callRegistMenuAPI(registMenu));
    }

    return(
        <>  
            <div className='regist'>
                <h2>보유 동물 등록</h2>
                <br/>
                <p>
                    <label>동물 이름 : </label>
                <input type="text" name="animalName" value={ registMenu.animalName } onChange={ onChangeHandler }/>
                </p> 
                <p>
                    <label>카테고리 : </label>
                    <select name="categoryName" value={ registMenu.categoryName } onChange={ onChangeHandler }>
                        <option>조류</option>
                        <option>포유류</option>
                        <option>양서류</option>
                        <option>파충류</option>
                </select>
                </p>
                <p>
                    <label>설명 : </label>
                    <textarea name="description" value={ registMenu.detail.description } onChange={ onChangeHandler }></textarea>
                </p>
                <p>
                <label>사진 : </label>
                <input 
                    type="file" 
                    name="image"
                    accept='image/*'
                    onChange={ fileChangeHandler }/>
                </p>
                <button onClick={ onClickHandler }>동물 등록</button>
            </div>
        </>
    );
}

export default MenuRegistForm;