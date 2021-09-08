function startOrStopTimer(state = 'start', action) {

    switch (action.type) {
        case 'start':
            return 'start'
        case 'stop':
            return 'stop'
        default:
            return state
    }
}

export { startOrStopTimer }