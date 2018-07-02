export default (
    state = {
        toDoList: [],
    }, action) => {
    switch (action.type){
        case 'ADD':
            return {
                toDoList: [...state.toDoList, action.value],
            };
        case 'DELETE':
            return {
                toDoList: []
            }
            
        default:
            return state;
    }
};
