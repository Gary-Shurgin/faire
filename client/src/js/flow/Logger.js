export const Logger = store => next => action => {
    let use = action
    // if ( action.type === "PERFORM_ACTION" ) {
    //     use = action.action
    // }
    if ( ! use.type.startsWith('@@')) {
        console.log(use)
    }
    next(action)
}
