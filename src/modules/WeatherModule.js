import { createActions, handleActions } from 'redux-actions';

/* 초기 state 값 */
const initialState = {};

/* 액션타입 */
const GET_WEATHER = 'weather/GET_WEATHER';

/* 날씨 관련 액션 함수 */
export const { weather : { getWeather}} = createActions({
    [GET_WEATHER] : (res) => ({weather : res})
});


/* 리듀서 함수 */
const weatherReducer = handleActions(
    {
        [GET_WEATHER] : (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default weatherReducer;



