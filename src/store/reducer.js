const INITIAL_STATE = {
        count: 0,
        numbers:[]
}

const reducer = (state = INITIAL_STATE, action) =>{
        switch(action.type){
                case 'INCREMENT':
                        return {
                                ...state,
                                count: state.count + action.value
                        }
                case 'DECREMENT':
                        return {
                                ...state,
                                count: state.count - action.value
                        }
                case 'SAVE_NUMBER':
                        return{
                                ...state,
                                numbers: [...state.numbers, action.value]
                        }
                case 'DELETE_NUMBER':
                        return{
                                ...state,
                                numbers: state.numbers.filter( (num, index) => index !== action.index)
                        }
                case 'RESET':
                        return action.value
                default:
                        return state
        }
}

export default reducer
