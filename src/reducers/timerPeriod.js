function timerPeriod(state = 'work', action) {

    switch (action.type) {
        case 'work':
            return 'work'
        case 'short_break':
            return 'short_break'
        case 'long_break':
            return 'long_break'
        default:
            return state
    }
}

export { timerPeriod }