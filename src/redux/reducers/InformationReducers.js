import information from '../State'
const informationReducers = (state = information, action) => {
    switch(action.type){
        case 'SUBMIT':{
            let newState = state;
            newState = action.value;
            return newState;
        }
        case 'EDIT':{
            let newState = state;
            newState = action.value;
            return newState;
        }
        case 'DELETE':{

        }
    }
}