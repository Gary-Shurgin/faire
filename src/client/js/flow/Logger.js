export const Logger = store => next => action => {
    if ( ! action.type.startsWith('@@')) {
        console.log(action)
    }
    next(action)
}
