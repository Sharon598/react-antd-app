import { INCREMENT } from '../actions/counter';

/*
* 初始化state
 */

const initState = {
    person: '',
    num: '',
    du: '',
    status: '',
    address: '',
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                person: action.data.person,
                num: action.data.num,
                du: action.data.du,
                status: action.data.status,
                address: action.data.address,
            }
        default:
            return state
    }
}