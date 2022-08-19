import { request } from "./Api"; 
import { login } from "../modules/UserModule";

export function callLoginAPI(loginInfo) {
    
    console.log('login api calls...');

    return async (dispatch, getState) => {
        
        const userList = await request('GET', '/user');

        const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password);

        console.log('login result : ', result);

        dispatch(login(result));

    }
}
