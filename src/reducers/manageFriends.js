export function manageFriends(state={friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            // removalIndex = state.friends.findIndex(friend => friend.id === action.id)
            let newArr = state.friends.filter(friend => friend.id != action.id)
            return {...state, friends: [...newArr]}
        default:
            return state
    }
}
 