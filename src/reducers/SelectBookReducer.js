export default function selectBookReducer(state, action){
    if(!state){
        state = null;
    }
    if(action && action.type === "SELECT_BOOK"){
        return action.payload;
    }
    return state;
};
