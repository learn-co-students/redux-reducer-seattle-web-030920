export function managePresents(state={numberOfPresents: 0}, action){
        if (action.type === "INCREASE") {
            let number = state.numberOfPresents + 1
            return {numberOfPresents: number}
        } else {
            return state
        }

}
