const initState = {
    people: [
        {name: 'Duc Hieu', phone: '0932120098', email: 'duchieu@gmail.com'}
    ]
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'addCard':
            return{
                ...state,
                people: [
                    ...state.people,
                    action.payload
                ]
            }
        
        default:
            return state
    }
}

export default rootReducer